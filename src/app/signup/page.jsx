import { Link } from "react-router-dom"
import SignUpForm from "./SignUpForm"

export default function SignUp() {
    return(
        <main className="bg-blue-700 min-h-screen text-orange-300 px-4 py-8 text-center">
            <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
            <SignUpForm/>
            <p className="mt-4">
            Already a user? <Link to="/login" className="text-sky-200">Login</Link>
            </p>
        </main>
    )
}