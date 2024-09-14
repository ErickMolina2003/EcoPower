import { Tabs } from "expo-router";
import {
  ChatIcon,
  FlashIcon,
  HomeIcon,
  LibraryIcon,
  NotificationIcon,
  PlayGroundIcon,
  SearchIcon,
  SettingsIcon,
} from "@/components/Icons";
import { Image, Pressable, Text, View } from "react-native";
import AppLogo2 from "@/assets/images/logo2.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "@/FirebaseConfig";

export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 h-full justify-evenly bg-white"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingStart: insets.left,
        paddingEnd: insets.right,
      }}
    >
      <>
        <View className="flex-row justify-between items-center px-5 py-2 bg-white">
          {/* Logo */}
          <View className="flex items-center">
            <Image source={AppLogo2} style={{ width: 132, height: 20 }} />
          </View>

          {/* Iconos de búsqueda y notificaciones */}
          <View className="flex-row items-center space-x-4">
            <Pressable>
              <SearchIcon />
            </Pressable>
            <Pressable>
              <NotificationIcon />
            </Pressable>
            <Pressable>
              <ChatIcon />
            </Pressable>
            <Pressable>
              <Text className="text-center w-6 h-6 rounded-full bg-app-yellow-500">
                {FIREBASE_AUTH.currentUser?.email?.at(0)}
              </Text>
            </Pressable>
          </View>

          {/* Avatar */}
        </View>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "white",
            },
          }}
        >
          <Tabs.Screen
            name="dashboard"
            options={{
              title: "Inicio",
              tabBarIcon: () => <HomeIcon color={"#4F93FF"} />,
              tabBarActiveTintColor: "#424242",
            }}
          />
          <Tabs.Screen
            name="progress"
            options={{
              title: "Mi Progreso",
              tabBarIcon: () => <FlashIcon color={"#4F93FF"} />,
              tabBarActiveTintColor: "#424242",
            }}
          />
          <Tabs.Screen
            name="playground"
            options={{
              title: "",
              tabBarIcon: () => <PlayGroundIcon />,
              tabBarActiveTintColor: "#424242",
            }}
          />
          <Tabs.Screen
            name="library"
            options={{
              title: "Biblioteca",
              tabBarIcon: () => <LibraryIcon color={"#4F93FF"} />,
              tabBarActiveTintColor: "#424242",
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: "Ajustes",
              tabBarIcon: () => <SettingsIcon color={"#4F93FF"} />,
              tabBarActiveTintColor: "#424242",
            }}
          />
          <Tabs.Screen
            name="libraryDetail"
            options={{
              href: null,
            }}
          />
        </Tabs>
      </>
    </View>
  );
}
