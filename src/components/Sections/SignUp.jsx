import React from "react";
import {useState, useContext} from 'react'
import styled from "styled-components";
import AuthContext from '../../context/AuthContext';

export default function SignUp() {
  
  const [first_name, setfirst_name] = useState("")
  const [last_name, setlast_name] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setphone] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {registerUser} = useContext(AuthContext)

  console.log(email);
  console.log(username);
  console.log(password);


  const handleSubmit = async e => {
    e.preventDefault()
    registerUser( username, first_name, last_name, password, email, phone)
  }
  

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" id="fname" name="fname" 
                              placeholder="first_name"
                              onChange={e => setfirst_name(e.target.value)}/>
        <label>Last Name:</label>
        <input type="text" id="lname" name="lname"
                              placeholder="setlast_name"
                              onChange={e => setlast_name(e.target.value)} />
        <label>Email:</label>
        <input type="email" id="email" name="email" 
                              placeholder="Email Address"
                              onChange={e => setEmail(e.target.value)}/>
        <label>Phone No.:</label>
        <input type="text" id="phone" name="phone"
                              placeholder="setphone"
                              onChange={e => setphone(e.target.value)} />
        <label>Username:</label>
        <input type="text" id="uname" name="uname" placeholder="Username"
                              onChange={e => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" id="subject" name="subject" placeholder="Password" onChange={e => setPassword(e.target.value) }/>
        <button type="submit">Submit</button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 0px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 10px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;