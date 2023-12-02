import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabase";

const Login = (props) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      console.log("Success");
      console.log(data);
      props.setToken(data)
      navigate('/homepage')
    } catch (err) {
      console.log("Error during registration", err);
    }
  }

  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to={"/"}>Register</Link>
      </p>
    </main>
  );
};

export default Login;
