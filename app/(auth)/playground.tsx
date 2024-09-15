import Matches from "@/components/dashboard/Matches";
import Tournaments from "@/components/dashboard/Tournaments";
import { Image, ScrollView, Text, View } from "react-native";
import SenImage from "@/assets/images/senImg.png";

export default function PlayGround() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        className="h-full pt-8 px-5 bg-white"
      >
        <View className="flex">
          <Matches />
          <Tournaments />
        </View>
        <View className="flex items-center mt-5">
          <View>
            <Text className="font-normal text-lg text-app-gray-500 mb-5">
              "Aprende viendo, aprende jugando"
            </Text>
          </View>
          <View>
            <Image source={SenImage} style={{ width: 250, height: 250 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
