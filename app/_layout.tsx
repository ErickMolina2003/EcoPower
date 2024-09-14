import { UserStore } from "@/constants/types";
import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import useAppStore from "@/store";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const segments = useSegments();
  const store = useAppStore();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const suscriber = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        const userDocRef = doc(FIREBASE_DB, "users", user?.uid);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          console.log("user docSnap", docSnap.data());
          setUser(docSnap.data() as User);
          store.setUser(docSnap.data() as UserStore);
        }
      }

      console.log("onAuthStateChanged", user);
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return suscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (user && !inAuthGroup) {
      router.replace("/(auth)/dashboard");
    } else if (!user && inAuthGroup) {
      router.replace("/");
    }
  }, [user, initializing]);

  if (initializing) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
