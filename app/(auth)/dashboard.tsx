import DailyMission from "@/components/dashboard/DailyMission";
import Matches from "@/components/dashboard/Matches";
import Tournaments from "@/components/dashboard/Tournaments";
import WelcomeScreen from "@/components/dashboard/WelcomeScreen";
import { ScrollView, View } from "react-native";

export default function Dashboard() {
  return (
    <View className="flex-1 bg-app-blue-500">
      <WelcomeScreen />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        className="h-full rounded-t-2xl pt-8 px-5 bg-white"
      >
        <DailyMission />
        <Matches />
        <Tournaments />
      </ScrollView>
    </View>
  );
}
