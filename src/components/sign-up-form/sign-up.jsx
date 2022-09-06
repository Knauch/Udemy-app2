import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormInput from '../form-iput/form-input'
import Button from '../button/button'; 
import {SignUpContainer} from './sign-up-form-style'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}



const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("PASS is NOT the same!");
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            )


            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            alert('User created successfully'); 
        }catch (error) {
            console.log('user creation error: ', error)
            if( error.code ==='auth/email-already-in-use'){
                alert('Email ALREADY in use! Please use another email address')
            }
        }
    }

    const handleChange = (event) => {

        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <h1>Sign up with your email and password</h1>
            <span>Input your data</span>
            <form onSubmit={ handleSubmit }>

                <FormInput
                    label = "Display Name" 
                    type='text' 
                    required onChange={handleChange} 
                    name='displayName' 
                    value={displayName} />

                <FormInput
                    label = "Email"  
                    type = 'email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}/>

                <FormInput 
                    label = "Password"
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}/>

                <FormInput
                    label = "Confirm Password" 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword}/>
                <Button type="submit">Sign UP</Button>
            </form>
        </SignUpContainer>
    )

}

export default SignUpForm
