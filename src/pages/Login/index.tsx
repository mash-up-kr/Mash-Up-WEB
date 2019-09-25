import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const white = '#ffffff'

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 630px;
  height: 804px;
  background-color: ${white};
`;

const StyledLogoWrapper = styled.div`
  margin-top: 96px;
  position: relative;
  width: 87px;
  height: 87px;
`;

const StyledLogo = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  background-color: red;
  border-top: 43.5px solid ${white};
  border-bottom: 43.5px solid #4f42e9;
  border-right: 43.5px solid #fc5e5d;
  border-left: 43.5px solid #4f42e9;
`;

const StyledTitle = styled.div`
  width: 182px;
  height: 37px;
  font-family: NotoSansCJKkr;
  font-size: 21px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`;

const StyledFomr = styled.form`
  margin-top: 25px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 393px;
  height: 54px;
  border-radius: 10px;
  border: solid 1px #707070;
  background-color: #ffffff;
`;

const StyledInput = styled.input`
  width: 277px;
  height: 32.5px;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: center;
  color: #dddddd;
  border: none;
`;

const StlyedButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 393px;
  height: 54px;
  border-radius: 10px;
  background-color: #4f42e9;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #4f42e9;
  width: 118px;
  height: 30px;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const StyledDescription = styled.div`
  margin-top: 160px;
  width: 303px;
  height: 37px;
  font-family: NotoSansCJKkr;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.84;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`;

const StyledLink = styled(Link)`
  width: 182px;
  height: 37px;
  font-family: NotoSansCJKkr;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.84;
  letter-spacing: normal;
  text-align: center;
  color: #4f42e9;
`;



const Login: React.FC = () => {
  return (
    <StyledLogin>
      <StyledWrapper>
        <StyledLogoWrapper>
          <StyledLogo />
        </StyledLogoWrapper>
        <StyledTitle>로그인</StyledTitle>
        <StyledFomr>
          <StyledInputWrapper>
            <StyledInput type='email' placeholder='이메일을 입력해주세요' />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledInput type='password' placeholder='비밀번호를 입력해주세요' />
          </StyledInputWrapper>
          <StlyedButtonWrapper>
            <StyledButton type='submit'>로그인하기</StyledButton>
          </StlyedButtonWrapper>
        </StyledFomr>
        <StyledDescription>
          아이디가 없는 매쉬업 회원이라면?
        </StyledDescription>
        <StyledLink to='signup'>
          인증 및 회원가입
        </StyledLink>
      </StyledWrapper>
    </StyledLogin>
  )
}

export default Login;