import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import AppLogo from "@/assets/images/logo.png";
import AppLogo2 from "@/assets/images/logo2.png";
import GoogleLogo from "@/assets/images/google.png";

enum REGISTER_STEPS {
  EMAIL,
  FORM,
}

export default function Register() {
  const [registerStep, setRegisterStep] = useState<REGISTER_STEPS>(
    REGISTER_STEPS.EMAIL
  );
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChangeStep() {
    if (!email) return;

    setRegisterStep(REGISTER_STEPS.FORM);
  }

  function handleCreateAccount() {
    console.log(email, name, password, confirmPassword);
  }

  return registerStep === REGISTER_STEPS.EMAIL ? (
    <View className="flex flex-grow justify-center gap-8">
      <View className="flex items-center">
        <Image source={AppLogo} style={{ width: 106, height: 80 }} />
      </View>
      <View className="flex items-center gap-4">
        <Text className="text-2xl font-medium text-app-blue-500 self-start text-center mb-10">
          Te damos la bienvenida a ECOPOWER
        </Text>
        <View className="w-full">
          <Pressable className="bg-transparent border border-app-blue-500 rounded-lg">
            <View className="flex flex-row justify-center items-center gap-3 py-2 ">
              <Image source={GoogleLogo} style={{ width: 16, height: 16 }} />
              <Text className="text-app-gray-600 font-normal text-sm">
                Google
              </Text>
            </View>
          </Pressable>
        </View>
        <Text className="text-xs font-normal text-app-blue-500">~ o ~</Text>
        <TextInput
          className="w-full p-2 bg-white border border-app-gray-500 rounded-lg shadow-md"
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
        />
        <View className="w-full mb-10">
          <Pressable
            className="flex items-center p-3 bg-app-blue-500 rounded-lg"
            onPress={handleChangeStep}
          >
            <Text className="text-white font-normal text-sm">CONTINUAR</Text>
          </Pressable>
        </View>
        <Text className="text-center">
          <Text className="text-center text-app-gray-800 font-normal text-xs">
            Al avanzar, aceptas {"\n"}
          </Text>
          <Text className="text-center text-app-blue-500 font-normal text-xs">
            Condiciones del servicio{" "}
          </Text>
          <Text className="text-center text-app-gray-800 font-normal text-xs">
            y{" "}
          </Text>
          <Text className="text-center text-app-blue-500 font-normal text-xs">
            Políticas de privacidad
          </Text>
        </Text>
      </View>
    </View>
  ) : (
    <View className="flex flex-grow justify-center gap-8">
      <View className="flex-1 justify-evenly">
        <View className="flex items-center">
          <Image source={AppLogo2} style={{ width: 132, height: 20 }} />
        </View>
        <View className="flex items-center gap-4">
          <Text className="text-2xl font-medium text-app-blue-500 self-start">
            Crea tu cuenta
          </Text>
          <View className="w-full">
            <Text className="mb-3 text-app-gray-600">Nombre Completo</Text>
            <TextInput
              className="w-full p-2 bg-white border border-app-gray-500 rounded-lg shadow-md"
              placeholder="Escribe tu nombre completo"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View className="w-full">
            <Text className="mb-3 text-app-gray-600">Contraseña</Text>
            <TextInput
              className="w-full p-2 bg-white border border-app-gray-500 rounded-lg shadow-md"
              placeholder="Ingresar al menos 8 caracteres"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View className="w-full">
            <Text className="text-xs font-bold text-app-gray-500">
              La contraseña debe incluir al menos:
            </Text>
            <Text className="text-xs font-bold text-app-gray-700">
              {`\u2022`} 6 caracteres{"\n"}
              {`\u2022`}1 número{"\n"}
              {`\u2022`}1 letra mayúscula{"\n"}
              {`\u2022`}1 letra minúscula
            </Text>
          </View>
          <View className="w-full">
            <Text className="mb-3 text-app-gray-600">Repetir contraseña</Text>
            <TextInput
              className="w-full p-2 bg-white border border-app-gray-500 rounded-lg shadow-md"
              placeholder="Ingresar al menos 8 caracteres"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>
      </View>
      <View>
        <View className="w-full mb-10">
          <Pressable
            className="flex items-center p-3 bg-app-blue-500 rounded-lg"
            onPress={handleCreateAccount}
          >
            <Text className="text-white font-normal text-sm">CONTINUAR</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
