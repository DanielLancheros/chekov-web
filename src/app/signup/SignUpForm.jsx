import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../App";

const firebaseConfig = {
    apiKey: "AIzaSyBaIlwOTwZM1dTXdyWiRSBFkk_tUwFuEJA",
    authDomain: "chekov-dl.firebaseapp.com",
    projectId: "chekov-dl",
    storageBucket: "chekov-dl.appspot.com",
    messagingSenderId: "148888952125",
    appId: "1:148888952125:web:ee12096ff5df55a6683954"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export default function SignUpForm(){
    
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(response => {
            setUser(response.user);
            navigate("/");
})
        .catch(err => alert(err.message))
    }

    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                setUser(response.user);
                navigate("/");
    })
        .catch(err => alert(err.message))
    }
    return (
        <main className="bg-blue-600 p-6 rounded-lg max-w-[420px] w-full mx-auto">
        <form onSubmit={handleSignup} className="flex flex-col items-start justify-around min-h-[30vh]">
            <label htmlFor="email" className="flex justify-between w-full">
            <span>Email</span>
            <input type="email" name="email"
            className="rounded-lg border-transparent border to-blue-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        </label>
        
        <label htmlFor="password" className="flex justify-between w-full">
            <span>Password</span>
            <input type="password" name="password" 
            className="rounded-lg border-transparent border to-blue-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        </label>
        
        <input type="submit" value="Sign Up" className="bg-green-300 text-blue-950 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-blue-300 hover:shadow-sm cursor-pointer w-full" />
        </form>
        <button onClick={handleGoogle} className="bg-green-300 text-violet-950 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-blue-300 hover:shadow-sm cursor-pointer">Sign Up with Google</button>
        </main>
    )
}