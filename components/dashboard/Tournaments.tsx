import { ScrollView, Text, View } from "react-native";
import TournamentCard from "./TournamentCard";
import rankingImg from "@/assets/images/ranking.png";
import dailyImg from "@/assets/images/daily.png";
import giftImg from "@/assets/images/gift.png";

const tournaments = [
  {
    id: 1,
    backgroundColor: "bg-app-blue-700",
    title: "Ranking",
    description: "¡Llega al Top #1!",
    backgroundImage: rankingImg,
  },
  {
    id: 2,
    backgroundColor: "bg-app-blue-500",
    title: "Reto del día",
    description: "¡Gana más puntos!",
    backgroundImage: dailyImg,
  },
  {
    id: 3,
    backgroundColor: "bg-app-blue-700",
    title: "Tienes un regalo",
    description: "¡Encuéntralo!",
    backgroundImage: giftImg,
  },
  {
    id: 4,
    backgroundColor: "bg-app-blue-700",
    title: "Ranking",
    description: "¡Llega al Top #1!",
    backgroundImage: rankingImg,
  },
  {
    id: 5,
    backgroundColor: "bg-app-blue-500",
    title: "Reto del día",
    description: "¡Gana más puntos!",
    backgroundImage: dailyImg,
  },
  {
    id: 6,
    backgroundColor: "bg-app-blue-700",
    title: "Tienes un regalo",
    description: "¡Encuéntralo!",
    backgroundImage: giftImg,
  },
];

export default function Tournaments() {
  return (
    <View className="mb-5">
      <Text className="font-semibold text-base text-app-gray-400 mb-3">
        Torneos
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
            description={tournament.description}
            backgroundImage={tournament.backgroundImage}
          />
        ))}
      </ScrollView>
    </View>
  );
}
