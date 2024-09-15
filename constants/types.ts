import { Timestamp } from "firebase/firestore";

export enum RegisterStatus {
    LOGIN,
    REGISTER,
}

export interface UserStore {
    uid: string;
    createdAt: Timestamp;
    email: string;
    name: string;
    updatedAt: Timestamp;
}

export type Answer = {
    option: string;
    text: string;
    isCorrect: boolean;
};

export type Question = {
    question: string;
    answers: Answer[];
};

export type Game = {
    total: number;
    createdAt: Date;
    updatedAt: Date;
};
