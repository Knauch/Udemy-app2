import SignUpForm from '../../components/sign-up/sign-up';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button
             type="button" 
             onClick={logGoogleUser}>
                SIGN IN with Google Popup
             </button>

            <SignUpForm />

        </div>
    )


}

export default SignIn