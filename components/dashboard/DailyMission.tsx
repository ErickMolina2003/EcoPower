import { Pressable, Text, View } from "react-native";
import { ControllerIcon, TrophyIcon } from "../Icons";

export default function DailyMission() {

    const percentageCompleted = 50;

  return (
    <View className="mb-5">
      <View>
        <Text className="font-semibold text-base text-app-gray-400 mb-3">
          Misión del día
        </Text>
        <View className="flex flex-row items-center p-2 rounded-md bg-app-blue-500">
          <View className="p-2 rounded-md bg-white">
            <ControllerIcon color="#F65A2A" />
          </View>
          <View className="flex flex-grow mx-3">
            <Text className="font-bold text-sm text-white">Gana 20 EXP</Text>
            <View className="w-full bg-white border border-gray-300 rounded-lg h-4 justify-center">
              <View
                className="absolute left-0 top-0 h-full bg-app-yellow-500 rounded-lg"
                style={{ width: `${percentageCompleted}%` }}
              />
              <View
                className="absolute inset-0 justify-center items-center"
                style={{ width: `${percentageCompleted}%` }}
              >
                <Text className="text-app-gray-400 font-bold text-xs text-center">
                  {percentageCompleted}/{"100"}
                </Text>
              </View>
              <View className="absolute -right-2 bg-white rounded-full p-1">
                <TrophyIcon size={20} color="#1A15FF" />
              </View>
            </View>
          </View>
          <View>
            <Pressable className="flex items-center p-3 bg-app-blue-600 rounded-lg">
              <Text className="text-white font-normal text-sm">JUGAR</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
