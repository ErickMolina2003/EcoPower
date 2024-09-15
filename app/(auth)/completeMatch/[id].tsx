import { StarFilledIcon, StarNotFilledIcon } from "@/components/Icons";
import RibonSvg from "@/components/libraryDetail/RibonSvg";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function CompleteMatch() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="flex flex-grow justify-center items-center gap-3 py-2 bg-white">
      <View className="flex rounded-md bg-app-blue-500 p-3">
        <View className="flex flex-row items-center justify-center gap-1">
          {Array.from({ length: 3 }, (_, i) => (
            <View key={i} className={`${i === 1 ? "mb-5" : ""}`}>
              <StarNotFilledIcon
                color="#EEC32D"
                name={`${+id >= (i + 1) * 33 ? "star" : "staro"}`}
              />
            </View>
          ))}
        </View>
        <View>
          <Text className="font-bold text-xl text-white">
            {+id > 50 ? "¡Bien hecho!" : "¡Fallaste!"}
          </Text>
        </View>
      </View>
      <View
        className="flex pb-2 px-2 shadow-lg rounded-lg bg-app-gray-100"
        style={{
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
          elevation: 6,
        }}
      >
        <View className="flex items-center mb-20">
          <View className="mb-1">
            <Text className="text-base font-semibold text-gray-800">score</Text>
          </View>
          <View className="px-10 py-1 rounded-3xl bg-app-blue-500">
            <Text className="text-xl font-normal text-center text-white">
              {id}
            </Text>
          </View>
        </View>
        <View>
          <Pressable
            className="bg-app-blue-500 rounded-md py-3"
            onPress={() => router.push("/(auth)/dashboard")}
          >
            <Text className="text-center font-normal text-sm px-14  text-white">
              SIGUIENTE
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
