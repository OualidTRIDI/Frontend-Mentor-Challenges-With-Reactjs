import React from 'react'

import {
    FormBtnClaim,
    FormInput,
    FormInputErr,
    FormSignUp,
    FormTerms,
    TermsAndServicesLink
} from "../style/style";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    firstname: yup.string().required("First Name cannot be empty"),
    lastname: yup.string().required("Last Name cannot be empty"),
    email: yup.string().email("Looks like  this is not an email").required("Email cannot be empty"),
    password: yup.string().required("Password cannot be empty"),
}).required();

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitSignup = data => {
        console.log(data)
    };

    return (
        <FormSignUp onSubmit={handleSubmit(submitSignup)}>
            <FormInput type="text" {...register("firstname")} placeholder="First Name" />
            <FormInputErr>{errors.firstname && errors.firstname.message}</FormInputErr>
            <FormInput type="text" {...register("lastname")} placeholder="Last Name" />
            <FormInputErr>{errors.lastname && errors.lastname.message}</FormInputErr>
            <FormInput type="email" {...register("email")} placeholder="Email Address" />
            <FormInputErr>{errors.email && errors.email.message}</FormInputErr>
            <FormInput type="password" {...register("password")} placeholder="Password" />
            <FormInputErr>{errors.password && errors.password.message}</FormInputErr>
            <FormBtnClaim >claim your free trial</FormBtnClaim>
            <FormTerms>
                By clicking the button you are agreeing to our
                <TermsAndServicesLink href='#'>
                    Term and services
                </TermsAndServicesLink>
            </FormTerms>
        </FormSignUp>
    )
}

export default Form;