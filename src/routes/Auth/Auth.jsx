import SignUpForm from '../../components/sign-up-form/sign-up';
import SignInForm from '../../components/sign-in-form/sign-in';
import { AuthContainer } from './auth-style';

const Authentication = () => {
    return (
        <AuthContainer>
            <SignInForm />
            <SignUpForm />
        </AuthContainer>
    )


}

export default Authentication