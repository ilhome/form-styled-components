import React from "react";
import {
  Description,
  Input,
  Title,
  Wrapper,
  InputWrapper,
  UserIcon,
  PasswordIcon,
  Button,
  Info,
  Checkbox,
  Span,
  Forget,
} from "./style";

function App() {
  return (
    <Wrapper>
      <Description>Already have an account ?</Description>
      <Title>Log in Here</Title>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Username"></Input>
      </InputWrapper>
      <InputWrapper>
        <PasswordIcon />
        <Input type="password" placeholder="Password"></Input>
      </InputWrapper>
      <Info>
        <Span>
          <Checkbox type="checkbox" />
          Keep me logged in
        </Span>
        <Button select>Log In</Button>
      </Info>
      <Forget>Forget password ?</Forget>
    </Wrapper>
  );
}

export default App;
