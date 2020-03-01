import React from 'react';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};

    if(!values.userName){
        errors.userName="Required!";
    }

    if(!values.password) {
        errors.password="Required!";
    }
    else if( values.password.length < 8 ) {
        errors.password="Password length must be greater than 8";
    }
    
    return errors;
}
const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        
    });
    return (
        <div>
            <h1 align="center">Login Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="username">UserName: </label>
                    <input type="text" name="userName" id="username" onChange={formik.handleChange} value={formik.values.userName} />
                    {formik.errors.userName? <div>{formik.errors.userName}</div> : null}
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
                    {formik.errors.password? <div>{formik.errors.password}</div> : null}
                </div>

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}


export default LoginForm;
