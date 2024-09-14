import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 bg-app-blue-500 pt-20">
      <View className="flex items-center justify-end -mb-10 z-20">
        <Text className="text-center justify-end items-center w-20 h-20 text-7xl rounded-full bg-app-yellow-500 border-4 border-app-blue-500">
          {FIREBASE_AUTH.currentUser?.email?.at(0)}
        </Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        className="h-full rounded-t-2xl px-5 bg-white pt-11"
      >
        <View className="mb-7">
          <Text className="text-app-gray-800 font-semibold text-base text-center justify-center items-center">
            {FIREBASE_AUTH.currentUser?.email}
          </Text>
        </View>
        <View className="flex gap-3">
          <Text className="text-sm font-light text-app-gray-600 self-start">
            Nombre de usuario
          </Text>
          <Text className="py-2 px-3 text-sm font-extralight  border-[0.5px] rounded-md border-app-gray-300">
            {FIREBASE_AUTH.currentUser?.email}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
