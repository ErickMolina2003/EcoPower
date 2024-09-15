import Answers from "@/components/match/Answers";
import MatchHeader from "@/components/match/MatchHeader";
import { Pressable, ScrollView, Text, View } from "react-native";
import { QUESTIONS } from "@/constants/Questions";
import { useEffect, useState } from "react";
import MatchQuestion from "@/components/match/MatchQuestion";
import { Answer, Question } from "@/constants/types";
import { useRouter } from "expo-router";
import useAppStore from "@/store";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FIREBASE_DB } from "@/FirebaseConfig";

const pointsPerCorrectAnswer = 10;

export default function Match() {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [lives, setLives] = useState(5);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionCompleted, setQuestionCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [isMatchCompleted, setIsMatchCompleted] = useState(false);
  const router = useRouter();
  const { user } = useAppStore();

  useEffect(() => {
    resetGame();
  }, [isMatchCompleted]);

  useEffect(() => {
    if (lives <= 0) {
      completeMatch();
    }
  }, [lives]);

  function getRandomQuestions(num: number) {
    return QUESTIONS.sort(() => 0.5 - Math.random()).slice(0, num);
  }

  function selectAnswer(selectedAnswer: Answer) {
    if (
      questions[currentQuestion].answers.find(
        (answer) => answer.option === selectedAnswer.option && answer.isCorrect
      )
    ) {
      setTotalScore((prev) => prev + pointsPerCorrectAnswer);
      setQuestionCompleted(true);
    } else {
      setLives((prev) => prev - 1);
      setQuestionCompleted(true);
    }
  }

  function handleNext() {
    if (!questionCompleted) {
      return;
    }
    setQuestionCompleted(false);
    if (currentQuestion === questions.length - 1) {
      completeMatch();
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
  }

  async function completeMatch() {
    setIsMatchCompleted(true);
    try {
      setIsLoading(true);
      const newDoc = {
        total: totalScore,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const userMatchDocRef = doc(FIREBASE_DB, "matches", user.uid);
      const docSnap = await getDoc(userMatchDocRef);
      if (docSnap.exists()) {
        const docData = docSnap.data();
        const newDocData = { games: [...docData.games, newDoc] };
        await setDoc(userMatchDocRef, newDocData);
      } else {
        await setDoc(userMatchDocRef, { games: [newDoc] });
      }
    } catch (error) {
      alert("Error al completar partida\nIntente nuevamente");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    router.push(`/(auth)/completeMatch/${totalScore}`);
  }

  function resetGame() {
    setIsLoading(true);
    const newQuestions = getRandomQuestions(10);
    setQuestions(newQuestions);
    setLives(5);
    setCurrentQuestion(0);
    setQuestionCompleted(false);
    setTotalScore(0);
    setIsMatchCompleted(false);
    setIsLoading(false);
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      className="flex-1 h-full pt-8 px-5 bg-white"
    >
      {!isLoading && (
        <>
          <MatchHeader
            remainingLives={lives}
            currentQuestion={currentQuestion + 1}
            questionsLength={questions.length}
          />
          <MatchQuestion question={questions[currentQuestion].question} />
          <Answers
            answers={questions[currentQuestion].answers}
            selectAnswer={selectAnswer}
            questionCompleted={questionCompleted}
          />
          <Pressable
            className="bg-app-blue-500 rounded-md py-3"
            onPress={handleNext}
          >
            <Text className="text-center font-normal text-sm text-white">
              SIGUIENTE
            </Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}
