import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 }  // formlardaki default değerleri belirlemek için

  const schema = Yup.object({     // doğrulama şeması yapmak için kullanılır. örn: productName girmek zorunludur gibi kuralları burada koyabilirim.

    productName: Yup.string().required("Ürün adı zorunlu."),
    unitPrice: Yup.number().required("Birim fiyat zorunlu")

  })

  return (
    <div>

      <Formik
        initialValues={initialValues} //formun başlangıç değerlerini ve doğrulama şemasını oluşturdum. 
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);  
        }}
        >

        <Form className='ui form'>
          <KodlamaIoTextInput name="productName" placeholder="Ürün adı"/>
          
          <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"/>

          <Button color='green' type='submit'>Submit</Button>  
        </Form>
      </Formik>
    </div>
  )
}

export default ProductAdd