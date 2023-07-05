export default function SignUpForm(){

    const handleSignup = (e) => {
        e.preventdefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
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
        <input type = "submit" value = "Sign Up" />
        </form>
    )
}