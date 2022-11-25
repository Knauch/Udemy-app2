import { useState } from 'react';
import { signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/firebase';
import FormInput from '../form-iput/form-input'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button'


import {
    SignUpContainer,
    ButtonsContainer
} from './sign-in-styles'

const defaultFormFields = {
    email: '',
    password: '',
}



const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
         await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
            alert(`User with EMAIL ${email} has enter`)
        }catch (error) {
            switch (error.code) {
                case 'auth/user-not-found': 
                alert('Email not found');
                break
                case 'auth/wrong-password':
                alert('Wrong password');
                break;
                default: 
                console.log(error);    
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <h1>Already have an account</h1>
            <span>Sign In with your email and password</span>
            <form onSubmit={ handleSubmit }>
                <FormInput
                    label = "Email"  
                    type = 'email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                />
                <FormInput 
                    label = "Password"
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                />
                <ButtonsContainer>
                    <Button type="submit">Sign IN</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignInForm
