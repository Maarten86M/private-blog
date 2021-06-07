import React from 'react';
import users from '../data/users.json';
import {
    useHistory
} from "react-router-dom";
import {useForm} from 'react-hook-form';


function Login(props) {
    const {register, getValues, handleSubmit, formState: {errors}} = useForm();
    const history = useHistory();

    // data from user.json
    const firstnameCheck = users.map((user) => {
        return user.Firstname;
    })

    // data from user.json
    const passwordCheck = users.map((user) => {
        return user.Password;
    })

    // Values from useForm,
    const Firstname = getValues("Firstname");
    const Password = getValues("Password");

    function LoginFunction() {
        if (Firstname == firstnameCheck && Password == passwordCheck) {
            props.toggleIsAuthenticated(true);
            history.push('/blogposts');
        } else {
            console.log("Helaas geen goed wachtwoord");
        }
    }

    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Firstname" {...register("Firstname", {})} />
                <input type="text" placeholder="Password" {...register("Password", {})} />

                <button onClick={LoginFunction}>Log in</button>
            </form>
        </>
    )
}

export default Login;