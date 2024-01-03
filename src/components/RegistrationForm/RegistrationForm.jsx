import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/user/userApi';
import { FormContainer, StyledForm } from './RegistrationForm.styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(registerUser(newUser));
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <label>Email Address:</label>
          <input type="email" name="email" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <button type="submit">Registration</button>
        </div>
      </StyledForm>
    </FormContainer>
  );
};
export default RegistrationForm;
