import React, { useState } from "react";

const SchoolRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { ...errors };
    if (formData.name.trim().length === 0) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
      valid = false;
    }
    if (formData.password.trim().length === 0) {
      newErrors.password = "Password is required";
      valid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validateForm()) {
      // Submit form data
    }
  };

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
       </div>
       <button type="submit">Submit</button>
       </form>
  );
}

export default SchoolRegistrationForm;
