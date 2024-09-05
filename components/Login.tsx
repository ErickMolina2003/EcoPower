import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import ScreenLayout from "./ScreenLayout";
import AppLogo from "@/assets/images/logo.png";
import GoogleLogo from "@/assets/images/google.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScreenLayout>
      <View className="flex-1">
        <View className="flex flex-grow justify-center gap-8">
          <View className="flex items-center">
            <Image source={AppLogo} style={{ width: 106, height: 80 }} />
          </View>
          <View className="flex items-center gap-4">
            <Text className="text-2xl font-medium text-app-blue-500 self-start">
              Ingresa a tu cuentas
            </Text>
            <TextInput
              className="w-full p-2 bg-white border border-app-gray-500 rounded-lg shadow-md"
              placeholder="Correo Electrónico"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              className="w-full p-2 bg-white border border-app-gray-500 rounded-lg shadow-md mb-5"
              placeholder="Contraseña"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            <Text className="text-xs text-app-blue-500">
              ¿Olvidaste tu contraseña?
            </Text>

            <View className="w-full">
              <Pressable
                className="flex items-center p-3 bg-app-blue-500 rounded-lg"
                onPress={() => {
                  console.log(email, password);
                }}
              >
                <Text className="text-white font-normal text-sm">INGRESAR</Text>
              </Pressable>
            </View>
          </View>
          <View className="flex items-center gap-4">
            <Text className="text-xs font-normal text-app-gray-800">
              ~ o ingresa con: ~
            </Text>
          </View>
          <View className="flex items-center gap-4">
            <View className="w-full">
              <Pressable
                className="bg-transparent border border-app-blue-500 rounded-lg"
                onPress={() => {
                  console.log(email, password);
                }}
              >
                <View className="flex flex-row justify-center items-center gap-3 py-2 ">
                  <Image
                    source={GoogleLogo}
                    style={{ width: 16, height: 16 }}
                  />
                  <Text className="text-app-gray-600 font-normal text-sm">
                    Google
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>

        <View className="flex mb-8">
          <Pressable>
            <Text className="text-center text-app-blue-500 font-normal text-xs">
              ¿No tienes una cuenta?
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenLayout>
  );
}
