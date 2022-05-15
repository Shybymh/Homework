import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Textlogin } from './Logintext';
import * as Yup from 'yup';

export const Login = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required')
  })
  return (
    <Formik
      initialValues={{
        teacher: false,
        name: '',
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
      
          <div className='Login' >
          <Form >
          <h1 >Welcome</h1>
            <Field type="checkbox" name="teacher" /> Are you a Teacher?
            <Textlogin label="Name" name="name" type="text" />
            <Textlogin label="Email" name="email" type="email" />
            <Textlogin label="Password" name="password" type="password" />
            <button type="submit">Login</button>
          </Form>
        </div>
       
      )}
    </Formik>
  )
}






// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";



// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="container Login">
//       <div className="row">
//         <div className="col">
//           <h1 >Welcome</h1>

//           <Form onSubmit={handleSubmit}>
//             <Form.Group size="lg" controlId="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 autoFocus
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group size="lg" controlId="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>
//             <Button block size="lg" type="submit" disabled={!validateForm()}>
//               Login
//             </Button>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }