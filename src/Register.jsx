import React from "react";
import {
  Description,
  Title,
  Wrapper,
  Input,
  InputWrapper,
  UserIcon,
  PasswordIcon,
  Button,
} from "./style";

function App() {
  return (
    <Wrapper>
      <Description>Don`t have an account ?</Description>
      <Title>Register Now</Title>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Desired Username"></Input>
      </InputWrapper>
      <InputWrapper>
        <PasswordIcon />
        <Input type="password" placeholder="Password"></Input>
      </InputWrapper>
      <InputWrapper>
        <PasswordIcon />
        <Input type="password" placeholder="Confirm Password"></Input>
      </InputWrapper>
      <Button>Log In</Button>
    </Wrapper>
  );
}

export default App;
