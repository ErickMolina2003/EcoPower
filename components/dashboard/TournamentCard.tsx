import { ImageBackground, ImageSourcePropType, Text, View } from "react-native";

interface Props {
  id: number;
  backgroundColor: string;
  title: string;
  description: string;
  backgroundImage: ImageSourcePropType;
}

export default function TournamentCard({
  id,
  backgroundColor,
  title,
  description,
  backgroundImage,
}: Props) {
  return (
    <View className={`flex w-28 m-2 h-full rounded-md ${backgroundColor}`}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        className="flex items justify-end h-full"
      >
        <Text className="text-white font-bold text-sm text-center">
          {title}
        </Text>
        <Text className="text-white font-normal text-xs pb-3 text-center">
          {description}
        </Text>
      </ImageBackground>
    </View>
  );
}
