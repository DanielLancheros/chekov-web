import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
export default function Login() {
    return(
        <main className="bg-blue-700 min-h-screen text-orange-300 px-4 py-8 text-center">
            <h1 className="text-3xl font-semibold mb-4 w-full">Login</h1>
            <LoginForm />
            <p className="mt-4">
            Not a user? <Link to="/signup" className="text-sky-200">Sign Up</Link>
            </p>
        </main>
    )
}