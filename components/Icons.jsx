import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";
import GoogleLogo from "@/assets/images/play.png";
import AntDesign from "@expo/vector-icons/AntDesign";

export const HomeIcon = (props) => (
  <Ionicons name="home-outline" size={24} {...props} />
);

export const FlashIcon = (props) => (
  <Ionicons name="flash-outline" size={24} {...props} />
);

export const LibraryIcon = (props) => (
  <Ionicons name="library-outline" size={24} {...props} />
);

export const SettingsIcon = (props) => (
  <Ionicons name="settings-outline" size={24} {...props} />
);

export const PlayGroundIcon = (props) => (
  <Image source={GoogleLogo} style={{ width: 70, height: 76 }} />
);

export const SearchIcon = (props) => (
  <AntDesign name="search1" size={24} {...props} />
);

export const NotificationIcon = (props) => (
  <Ionicons name="notifications-outline" size={24} {...props} />
);

export const ChatIcon = (props) => (
  <Ionicons name="chatbubbles-outline" size={24} {...props} />
);

export const ControllerIcon = (props) => (
  <Ionicons name="game-controller-outline" size={24} {...props} />
);

export const TrophyIcon = (props) => (
  <Ionicons name="trophy-outline" size={24} {...props} />
);

export const DiamondIcon = (props) => (
  <Ionicons name="diamond-outline" size={24} {...props} />
);

export const RibbonIcon = (props) => (
  <Ionicons name="ribbon-outline" size={24} {...props} />

);

