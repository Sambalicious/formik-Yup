import React from 'react';
import {useFormik } from 'formik';
import * as Yup from 'yup';


const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values =>{
    console.log('Form Data', values)
}

const validate = values =>{

    let error = {}

            if(!values.name){
                error.name = 'Required'
            }

            if(!values.email){
                error.email = 'Email is required'
            }
            else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/){
                error.email = 'Enter a valid Email'
            }
            if(!values.channel) {
                error.channel= 'Channel is Required'
            }

            return error
        }

        const validationSchema = Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid Email format').required('Email Field is required'),
            channel: Yup.string().required('Channel name is required')
        })





const FormikForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema        
    });
    console.log('Form Errors', formik.errors)

    return ( 
        <div>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text"  name="name" id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div>:null}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="name"  
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                     {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div>:null}
                 </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" name="channel" id="name"
                        value={formik.values.channel} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                 {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div>:null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default FormikForm;