import ScreenLayout from "@/components/ScreenLayout";
import { ScrollView, Text, View } from "react-native";
import rankingImg from "@/assets/images/ranking.png";
import dailyImg from "@/assets/images/daily2.png";
import giftImg from "@/assets/images/gift2.png";
import TournamentCard from "@/components/dashboard/TournamentCard";
import { useRouter } from "expo-router";

const tournaments = [
  {
    id: 1,
    backgroundColor: "bg-app-blue-700",
    title: "Maneras eficientes de ahorrar energía",
    backgroundImage: rankingImg,
  },
  {
    id: 2,
    backgroundColor: "bg-app-yellow-400",
    title: "Lorem ipsum dolor sit amet consectetur.",
    backgroundImage: dailyImg,
  },
  {
    id: 3,
    backgroundColor: "bg-app-orange-500",
    title: "Lorem ipsum dolor sit amet consectetur.",
    backgroundImage: giftImg,
  },
  {
    id: 4,
    backgroundColor: "bg-app-blue-700",
    title: "Lorem ipsum dolor sit amet consectetur.",
    backgroundImage: rankingImg,
  },
  {
    id: 5,
    backgroundColor: "bg-app-yellow-400",
    title: "Lorem ipsum dolor sit amet consectetur.",
    backgroundImage: dailyImg,
  },
  {
    id: 6,
    backgroundColor: "bg-app-orange-500",
    title: "Lorem ipsum dolor sit amet consectetur.",
    backgroundImage: giftImg,
  },
];

const librarySections = [
  "Tendencias actuales",
  "Tips y consejos",
  "Respuestas a preguntas más frecuentes",
];

export default function Library() {
  const router = useRouter();

  function goToDetailLibrary() {
    router.push("/(auth)/libraryDetail");
  }

  return (
    <View className="flex-1 px-6 pt-6 bg-white">
      <View className="mb-5">
        <Text className="font-normal text-xl text-app-gray-400 mb-5">
          Biblioteca
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} className="h-full">
          {librarySections.map((section, i) => (
            <View key={i} className="mb-5">
              <Text className="font-semibold text-base text-app-gray-400 mb-1">
                {section}
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                className="flex-row h-32"
              >
                {tournaments.map((tournament) => (
                  <TournamentCard
                    key={tournament.id}
                    id={tournament.id}
                    backgroundColor={tournament.backgroundColor}
                    title={tournament.title}
                    backgroundImage={tournament.backgroundImage}
                    onClick={goToDetailLibrary}
                  />
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
