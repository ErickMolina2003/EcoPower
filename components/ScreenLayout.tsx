import { ReactElement } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenLayout({ children }: { children: ReactElement }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 h-full justify-evenly bg-blue-50 px-10"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingStart: insets.left,
        paddingEnd: insets.right,
      }}
    >
      {children}
    </View>
  );
}
