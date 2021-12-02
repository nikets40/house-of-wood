import {User} from "firebase/auth";
interface UserContextInterface {
    user: User | null;
    username: string;
}

export default UserContextInterface;