import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import ScreenLayout from "../ScreenLayout";
import { RegisterStatus } from "@/constants/types";
import Register from "./Register";
import Login from "./Login";

export default function Auth() {
  const [registerStatus, setRegisterStatus] = useState(RegisterStatus.LOGIN);

  return (
    <ScreenLayout>
      <View className="flex-1">
        {registerStatus === RegisterStatus.LOGIN && <Login />}

        {registerStatus === RegisterStatus.REGISTER && <Register />}

        <View className="flex mb-10">
          {registerStatus === RegisterStatus.LOGIN && (
            <Pressable
              onPress={() => setRegisterStatus(RegisterStatus.REGISTER)}
            >
              <Text className="text-center text-app-blue-500 font-normal text-xs">
                ¿No tienes una cuenta?
              </Text>
            </Pressable>
          )}
          {registerStatus === RegisterStatus.REGISTER && (
            <Pressable onPress={() => setRegisterStatus(RegisterStatus.LOGIN)}>
              <Text className="text-center">
                <Text className="text-center text-app-gray-800 font-normal text-xs">
                  ¿Ya tienes una cuenta?{" "}
                </Text>
                <Text className="text-center text-app-blue-500 font-normal text-xs">
                  Iniciar sesión
                </Text>
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </ScreenLayout>
  );
}
