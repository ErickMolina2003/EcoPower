import { Answer } from "@/constants/types";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  answers: Answer[];
  selectAnswer: (answer: Answer) => void;
  questionCompleted: boolean;
};

export default function Answers({
  answers,
  selectAnswer,
  questionCompleted,
}: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  function handleSelectAnswer(answer: Answer) {
    setSelectedAnswer(answer);
    selectAnswer(answer);
  }

  return (
    <View className="flex flex-wrap flex-row justify-between gap-y-5 mb-5">
      {answers.map((answer, index) => (
        <Pressable
          key={index}
          className={`w-[48%] px-3 py-5 border rounded-md border-app-gray-500 
            ${
              questionCompleted &&
              selectedAnswer &&
              selectedAnswer.option === answer.option
                ? selectedAnswer.isCorrect
                  ? "bg-app-blue-700"
                  : "bg-app-orange-500"
                : ""
            }
            ${questionCompleted && answer.isCorrect ? "bg-app-blue-700" : ""}`}
          onPress={() => handleSelectAnswer(answer)}
        >
          <Text
            className={`
                font-normal text-sm text-app-gray-600
            ${
              questionCompleted &&
              selectedAnswer &&
              selectedAnswer.option === answer.option
                ? selectedAnswer.isCorrect
                  ? "text-white"
                  : "text-white"
                : ""
            }
            ${questionCompleted && answer.isCorrect ? "text-white" : ""}`}
          >
            {answer.text}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
