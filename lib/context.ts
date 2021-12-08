import { createContext } from "react";

import { User } from "firebase/auth";
interface UserContextInterface {
    user: User | null;
    username: string;
}

export const UserContext = createContext<UserContextInterface | null>(null);