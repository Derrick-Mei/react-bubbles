import React from "react";
import axios from "axios";
import useForm from "react-hook-form";

const Login = (props) => {
  const [error, setError] = React.useState('')
  const { register, handleSubmit, errors } = useForm();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const formSubmit = data => {
    axios
      .post("http://localhost:5000/api/login", data)
      .then(res => {
        console.log(res)
        setError('')
        window.localStorage.setItem('token', res.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => {
        console.log(err.response.data.error)
        setError(err.response.data.error)});
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      {error && <div>{error}</div>}
      <legend>Please Sign In</legend>
      <label>
        Username:
        <input
          name="username"
          placeholder="Username"
          defaultValue="Lambda School"
          ref={register({ required: true })}
        />
      </label>
      {errors.username && <p>Username is required</p>}

      <label>
        Password:
        <input
          name="password"
          type="password"
          placeholder="Password"
          defaultValue="i<3Lambd4"
          ref={register({ required: true })}
        />
      </label>
      {errors.password && <p>Password is required</p>}

      <div className="button-row">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
