import { Timestamp } from "firebase/firestore";

export enum RegisterStatus {
    LOGIN,
    REGISTER,
}

export interface UserStore {
    createdAt: Timestamp;
    email: string;
    name: string;
    updatedAt: Timestamp;
}
