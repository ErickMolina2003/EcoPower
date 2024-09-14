import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { Text, TextInput, View } from "react-native";
import { SearchIcon } from "../Icons";
import useAppStore from "@/store";

export default function WelcomeScreen() {
  const store = useAppStore();
  console.log(store.user);

  return (
    <View className="flex flex-col justify-center gap-5 py-5">
      <View className="flex flex-row justify-between px-6">
        <View>
          <Text className="text-xs font-normal text-white">
            Bienvenido de nuevo
          </Text>
          <Text className="text-base font-semibold text-white">
            {store.user.name}
          </Text>
        </View>
        <View className="flex items-center justify-center">
          <Text className="text-center w-6 h-6 rounded-full bg-app-yellow-500">
            {store.user.name.at(0)}
          </Text>
        </View>
      </View>
      <View className="px-6">
        <View className="justify-center">
          <SearchIcon className="absolute left-2 z-20" size={18} />

          <TextInput
            className="w-full py-2 pl-8 bg-white border border-app-gray-500 rounded-lg shadow-md"
            placeholder="Buscar amigo"
            autoCapitalize="none"
            inlineImageLeft="search1"
          />
        </View>
      </View>
    </View>
  );
}
