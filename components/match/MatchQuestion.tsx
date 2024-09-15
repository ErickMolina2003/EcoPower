import { Text, View } from "react-native";

type Props = {
  question?: string;
};

export default function MatchQuestion({
  question = "¿Cuál de los siguientes electrodomésticos consume más energía si se deja encendido todo el día?",
}: Props) {
  return (
    <View className="bg-app-blue-500 mb-5 px-3 py-14">
      <Text className="text-white text-sm font-bold text-center">
        {question}
      </Text>
    </View>
  );
}
