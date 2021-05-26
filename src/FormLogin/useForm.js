import { useState } from 'react'
import { Redirect } from 'react-router';

const useForm = (handler, validate, props) => {
  const [values, setvalues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setvalues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.classList.value === 'form-signin'
      && validate(values).username === undefined
      && validate(values).password === undefined) {
      const postLogin = async () => {
        await fetch("http://localhost:5500/login", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password
          })
        })
          .then(res => res.json())
          .then(data => {
            handler.setAuth(true);
            console.log(data);
            if (data.flag) {
              console.log(handler.accessToken);
              props.history.push('/dashboard')
            } else {
              alert("Username or password is wrong./nPlease re-enter!")
            }
          })
          .catch(err => console.log(err))
      }
      postLogin();
    }
    setErrors(validate(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;