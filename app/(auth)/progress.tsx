import ScreenLayout from "@/components/ScreenLayout";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { Pressable, Text, View } from "react-native";

export default function Progress() {
  return (
    <ScreenLayout>
      <View className="flex-1 justify-center items-center">
        <Text>Progress</Text>
        <Pressable onPress={() => FIREBASE_AUTH.signOut()}>
          <Text className="text-center text-app-blue-500 font-normal text-xs">
            Logout
          </Text>
        </Pressable>
      </View>
    </ScreenLayout>
  );
}
