import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';


const FormikYup = () => {
    return ( 
        <Formik
            initialValues={{email:'', password: ''}}
            onSubmit={(values,{setSubmitting})=>{
                setTimeout(() => {
                        console.log('logging in', values)
                }, 500);
            }}
            

            ///define the validation


            validationSchema = {Yup.object().shape({
                email: Yup.string()
                .email('Enter a valid email')
                .required('Required'),

                password: Yup.string().required('Provide a Valid Password')
                .min(8, "Password is too short and should be 8 characters long")
                .matches(/(?=.*[0-9])/, "password should contain a number")
            })}
                        
            
            >

                {
                    props =>{
                        const {
                            values, 
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;

                        return(
                            <form autocomplete="off" onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text" 
                                    value={values.email}
                                    onChange={handleChange}
                                    name="email"
                                    onBlur={handleBlur}
                                    placeholder="Enter Your Email"
                                    className={errors.email && touched.email && 'error'}
                                  />
                                        {
                                            errors.email && touched.email && (
                                                <div className="input-feedback">{errors.email} </div>
                                            )
                                        }
                                <label htmlFor="passworld">Password</label>
                                <input
                                    type="password" 
                                    value={values.password}
                                    onChange={handleChange} 
                                    placeholder="Enter your Password"
                                    name="password"
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && 'error'}
                                   />
                                        {errors.password && touched.password && (
                                            <div className="input-feedback">
                                                {errors.password}
                                            </div>
                                        )}
                                <button type="submit" disabled={isSubmitting}>Login</button>
                            </form>
                        )
                    }
                }

        </Formik>
     );
}
 
export default FormikYup;