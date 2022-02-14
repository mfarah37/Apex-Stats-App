import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function AuthPage({ setUser }) {
    return (
        <main className='container'>
            <h1>Apex Stats</h1>
            <SignUpForm setUser = {setUser} />
            <LoginForm setUser={setUser} />
        </main>
    )
}