import React from 'react';
import {useFormik } from 'formik';


const FormikForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: values => {
                console.log('Form Data', values)
        }
    });
    //console.log('FormValues', formik.values)

    return ( 
        <div>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text"  name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />

                <label htmlFor="email:">Email:</label>
                <input type="email" name="email" id="name"  value={formik.values.email} onChange={formik.handleChange} />

                <label htmlFor="channel">Channel:</label>
                <input type="text" name="channel" id="name"  value={formik.values.channel} onChange={formik.handleChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default FormikForm;