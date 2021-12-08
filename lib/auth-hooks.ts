import { auth } from "./firebase";
import { Auth, User } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import router from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from "react-hot-toast";
import { FirebaseError } from "@firebase/util";

// const router = useRouter();
export const loginWithGoogle = async () => {
    try {
        const googleAuthProvider = new GoogleAuthProvider();
        const credentials = await signInWithPopup(auth, googleAuthProvider);
        const userExistsInDB = await checkUserExists(credentials.user);
        if (!userExistsInDB) {
            createUserInDB(credentials.user);
        }
        router.replace("/", null, { shallow: false });
    } catch (error) {
        console.error("error signing in with google:- ", error);
        toast.error(error.message);

    }
}

export const loginWithEmail = async (email: string, password: string) => {
    try {
        const credential = await signInWithEmailAndPassword(auth, email, password);
        router.replace("/", null, { shallow: false });

    } catch (error) {
        console.error("error signing in with email:- ", error);
        toast.error(error.message);

    }
}



export const createUserWithEmail = async (name: string, email: string, password: string) => {
    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        await createUserInDB(credentials.user);
        const userExistsInDB = await checkUserExists(credentials.user);
        if (!userExistsInDB) {
            await createUserInDB(credentials.user, name);
        }
        router.replace("/", null, { shallow: false });
        return {success: true, message: "User created successfully"};

    } catch (error) {
        console.error("error creating user with email and password:- ", error);
        if (error.code === "auth/email-already-in-use") {
            toast.error("User Already Exists", { position: "top-center", duration: 5000 });
            return {success: false, message: "User Already Exists"};
        }
        toast.error(error.message, { position: "top-center", duration: 5000 });
        return {success: false, message: error.message};

    }
}

const checkUserExists = async (user: User) => {
    try {
        const userRef = doc(db, `users/${user.uid}`);
        const userData = await getDoc(userRef);
        if (!userData.exists) {
            return true;
        }
        return false;
    } catch (error) {
        console.error("error checking user exists:- ", error);
        toast.error(error.message);

    }
}

export const logout = async () => {
    console.log("trying to logout");

    try {
        await auth.signOut();
        // router.replace("/login", null, { shallow: true });
        router.reload();
    } catch (error) {
        console.error("error signing out:- ", error);
        toast.error(error.message);
    }
}

const createUserInDB = async (user: User, username?: string) => {
    try {
        const userRef = doc(db, `users/${user.uid}`);
        await setDoc(userRef, {
            name: username ?? user.displayName,
            email: user.email,
            photoURL: user.photoURL
        });
    } catch (error) {
        console.error("error creating user in db:- ", error);
        toast.error(error.message);
    }
}

export function useUserData() {
    const [user] = useAuthState(auth);
    const [username, setUserName] = useState("");


    useEffect(() => {
        console.log("user Auth State changed");

        const getUserName = async () => {
            let unsubscribe;
            if (user) {
                console.log(user.uid);
                
                const _ref = doc(db, `users`, user.uid);
                unsubscribe = onSnapshot(_ref, (doc) => {
                    if (doc.exists()) {
                        setUserName(doc.data()?.name);
                    }
                });

            } else {
                setUserName("");
            }
            return unsubscribe;
        };

        getUserName();
    }, [user]);

    return { user, username };
}

export const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};