import SignUpForm from '../../components/sign-up-form/sign-up';
import SignInForm from '../../components/sign-in-form/sign-in';
import './auth.scss'

const Authentication = () => {
    return (
        <div className='auth-container'>
            <SignInForm />
            <SignUpForm />

        </div>
    )


}

export default Authentication