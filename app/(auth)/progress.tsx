import { DiamondIcon, FlashIcon, RibbonIcon } from "@/components/Icons";
import { Game } from "@/constants/types";
import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import useAppStore from "@/store";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Progress() {
  const { user } = useAppStore();
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const getProgress = async () => {
      const userMatchDocRef = doc(FIREBASE_DB, "matches", user.uid);
      const docSnap = await getDoc(userMatchDocRef);
      if (docSnap.exists()) {
        const docData = docSnap.data();
        setGames(docData.games);
      } else {
        setGames([]);
      }
    };

    getProgress();
  }, []);

  return (
    <View className="flex-1 bg-app-blue-500 pt-20">
      <View className="flex items-center justify-end -mb-10 z-20">
        <Text className="text-center justify-end items-center w-20 h-20 text-7xl rounded-full bg-app-yellow-500 border-4 border-app-blue-500">
          {user.name.at(0)}
        </Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        className="h-full rounded-t-2xl px-5 bg-white pt-11"
      >
        <View>
          <Text className="text-app-gray-800 font-semibold text-base text-center justify-center items-center">
            {user.name}
          </Text>
        </View>
        <View className="flex flex-row justify-between rounded-md my-5 bg-app-yellow-400 py-2">
          <View className="w-1/3">
            <View className="flex items-center">
              <FlashIcon />
              <Text className="text-center font-normal text-xs">Ranking</Text>
            </View>
            <Text className="text-center font-bold text-base">#1</Text>
          </View>
          <View className="w-1/3 border-x-2 border-white">
            <View className="flex items-center">
              <DiamondIcon />
              <Text className="text-center font-normal text-xs">Puntos</Text>
            </View>
            <Text className="text-center font-bold text-base">2,555</Text>
          </View>
          <View className="w-1/3">
            <View className="flex items-center">
              <RibbonIcon />
              <Text className="text-center font-normal text-xs">
                Veces en Top 3
              </Text>
            </View>
            <Text className="text-center font-bold text-base">5</Text>
          </View>
        </View>
        <View>
          <Text className="mb-3 text-base font-semibold text-app-gray-400">
            Partidas Recientes
          </Text>
          <View className="flex flex-col gap-3">
            {games.length > 0 ? (
              games.map((game, i) => (
                <View
                  key={i}
                  className="flex flex-row justify-between items-center p-3 bg-app-gray-100"
                >
                  <View className="flex flex-row items-center gap-3">
                    <Text className="text-center justify-end items-center w-16 h-16 text-6xl rounded-full bg-app-yellow-500 border-4 border-app-blue-500">
                      {user.name.at(0)}
                    </Text>
                    <Text className="text-app-gray-900 font-bold text-sm text-center justify-center items-center">
                      {user.name}
                    </Text>
                  </View>
                  <View>
                    <Text className="text-app-gray-900 font-bold text-2xl text-center justify-center items-center">
                      +{game.total}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <View className="flex flex-row justify-center items-center p-3 bg-app-gray-100">
                <Text className="text-app-gray-900 font-bold text-sm text-center justify-center items-center">
                  No hay partidas recientes
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
