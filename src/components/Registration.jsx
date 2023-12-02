import React from "react";
import { useState } from "react";
import supabase from "../supabase.js";
import { Link } from "react-router-dom";

const Registration = () => {
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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      console.log("Success");
    } catch (err) {
      console.log("Error during registration", err);
    }
  }

  return (
    <main>
      <h2>Register</h2>
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

        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to={'/login'}>Login</Link></p>
    </main>
  );
};

export default Registration;
