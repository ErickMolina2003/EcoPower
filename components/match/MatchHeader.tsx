import { Text, View } from "react-native";
import { CloseIcon, HeartIcon } from "../Icons";

type Props = {
  remainingLives?: number;
  questionsLength?: number;
  currentQuestion?: number;
};

export default function MatchHeader({
  remainingLives = 5,
  questionsLength = 10,
  currentQuestion = 1,
}: Props) {
  return (
    <View className="flex gap-2 mb-5">
      <View className="flex flex-row justify-between items-center">
        <View className="flex items-center">
          <HeartIcon color="#F65A2A" size={40} />
          <Text className="absolute top-3 text-xs font-normal text-app-orange-500">
            {remainingLives}
          </Text>
        </View>
        <View className="flex items-center">
          <Text className="text-xs font-normal text-app-yellow-400">{`${currentQuestion}/${questionsLength}`}</Text>
          <Text className="text-base font-semibold text-app-gray-400">
            Partida Solo
          </Text>
        </View>
        <View>
          <CloseIcon size={40} />
        </View>
      </View>
      <View>
        <View className="w-full bg-white border border-gray-300 rounded-lg h-2 justify-center">
          <View
            className="absolute left-0 top-0 h-full bg-app-blue-600 rounded-lg"
            style={{ width: `${(currentQuestion / questionsLength) * 100}%` }}
          />
        </View>
      </View>
    </View>
  );
}
