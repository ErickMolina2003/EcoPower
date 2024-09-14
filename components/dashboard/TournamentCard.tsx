import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

interface Props {
  id: number;
  backgroundColor: string;
  title: string;
  description?: string;
  backgroundImage: ImageSourcePropType;
  onClick?: () => void;
}

export default function TournamentCard({
  id,
  backgroundColor,
  title,
  description,
  backgroundImage,
  onClick,
}: Props) {
  return (
    <Pressable onPress={onClick}>
      <View className={`flex w-28 m-2 h-full rounded-md ${backgroundColor}`}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          className="flex items justify-end h-full"
        >
          <Text
            className={`text-white font-bold text-sm  ${
              !description ? "text-left pb-3 pl-1" : "text-center pb-0"
            }`}
          >
            {title}
          </Text>
          {description && (
            <Text className="text-white font-normal text-xs pb-3 text-center">
              {description}
            </Text>
          )}
        </ImageBackground>
      </View>
    </Pressable>
  );
}
