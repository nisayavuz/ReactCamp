import { useField } from 'formik';
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';


export default function KodlamaIoTextInput({ ...props }) {
    //console.log(props);
    //usefield => reflect api kullanıyor.
    const [field, meta] = useField(props)

    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <input {...field} {...props} />
            </FormField>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color='red' content={meta.error}></Label>
            ) : null}
        </div>
    )
}
