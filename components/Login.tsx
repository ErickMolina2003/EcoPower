import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import ScreenLayout from "./ScreenLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScreenLayout>
      <>
        <View>
          <View className="flex items-center mb-10">
            <Text className="text-4xl font-bold">Iniciar sesión</Text>
          </View>
          <View className="flex items-center mb-5 gap-4">
            <TextInput
              className="w-full p-2 bg-white border border-transparent rounded shadow-md"
              placeholder="Correo Electrónico"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              className="w-full p-2 bg-white border border-transparent rounded shadow-md"
              placeholder="Contraseña"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View className="flex items-end mb-10">
            <Text className="text-xs text-gray-400">
              ¿Olvidaste tu contraseña?
            </Text>
          </View>
          <View className="mb-12">
            <Pressable
              className="flex items-center p-3 bg-blue-600 rounded-xl"
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 1,
                  height: 3,
                },
                elevation: 6,
              }}
              onPress={() => {
                console.log(email, password);
              }}
            >
              <Text className="text-white">Iniciar Sesión</Text>
            </Pressable>
          </View>
          <View className="flex flex-row gap-3 items-center mb-8">
            <View className="flex-1 h-1 w-1 bg-gray-200" />
            <Text className="text-gray-400">O continua con</Text>
            <View className="flex-1 h-1 bg-gray-200" />
          </View>
          <View className="flex items-center">
            <View
              className="bg-white w-1/4 flex items-center py-2 rounded-md"
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 1,
                  height: 3,
                },
                elevation: 6,
              }}
            >
              <FontAwesome5 name="google" size={24} />
            </View>
          </View>
        </View>

        <View className="justify-end items-center">
          <Pressable>
            <Text>Si no tienes una cuenta</Text>
            <Text className="text-center text-blue-600 font-bold">
              ¡Regístrate aquí!
            </Text>
          </Pressable>
        </View>
      </>
    </ScreenLayout>
  );
}
