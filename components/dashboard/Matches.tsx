import { ImageBackground, Text, View } from "react-native";
import soloImg from "@/assets/images/solo.png";
import dueloImg from "@/assets/images/duelo.png";

export default function Matches() {
  return (
    <View className="mb-5">
      <Text className="font-semibold text-base text-app-gray-400 mb-3">
        Tus partidas
      </Text>
      <View className="flex flex-row justify-between h-28">
        <View className="flex w-[48%] h-full rounded-md bg-app-orange-500">
          <ImageBackground
            source={soloImg}
            resizeMode="cover"
            className="flex items justify-end h-full"
          >
            <Text className="text-white font-semibold text-xl pb-3 pl-3">
              Solo
            </Text>
          </ImageBackground>
        </View>
        <View className="flex w-[48%] h-full rounded-md bg-app-yellow-400">
          <ImageBackground
            source={dueloImg}
            resizeMode="cover"
            className="flex items justify-end h-full"
          >
            <Text className="text-white font-semibold text-xl pb-3 pl-3">
              Duelo
            </Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}
