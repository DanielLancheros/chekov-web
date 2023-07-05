import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../App";
const firebaseConfig = {
    apiKey: "AIzaSyBaIlwOTwZM1dTXdyWiRSBFkk_tUwFuEJA",
    authDomain: "chekov-dl.firebaseapp.com",
    projectId: "chekov-dl",
    storageBucket: "chekov-dl.appspot.com",
    messagingSenderId: "148888952125",
    appId: "1:148888952125:web:ee12096ff5df55a6683954"
  };

export default function SignUpForm(){
    
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                setUser(response.user);
                navigate("/");
    })
    .catch(err => alert(err.message))
    }
    return (
        <form onSubmit={handleSignup}>
            <label htmlFor="email">
            Email
            <input type="email" name="email" />
        </label>
        <br />
        <label htmlFor="password">
            Password
            <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Sign Up" />
        </form>
    )
}