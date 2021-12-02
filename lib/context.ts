import { createContext } from "react";
import UserContextInterface from "../interfaces/usercontextInterface";

export const UserContext = createContext<UserContextInterface | null>(null);