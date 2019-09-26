import { Link } from 'react-router-dom';
import styled from 'styled-components';

const white = '#ffffff'

export const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4f42e9

;
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 630px;
  height: 804px;
  background-color: ${white};
`;

export const StyledLogoWrapper = styled.div`
  margin-top: 96px;
  position: relative;
  width: 87px;
  height: 87px;
`;

export const StyledLogo = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  background-color: red;
  border-top: 43.5px solid ${white};
  border-bottom: 43.5px solid #4f42e9;
  border-right: 43.5px solid #fc5e5d;
  border-left: 43.5px solid #4f42e9;
`;

export const StyledTitle = styled.div`
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

export const StyledFomr = styled.form`
  margin-top: 25px;
`;

export const StyledInputWrapper = styled.div`
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

export const StyledInput = styled.input`
  width: 277px;
  height: 32.5px;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  line-height: 1.45;
  text-align: center;
  border: none;
  ::placeholder {
  color: #dddddd;
}

`;

export const StlyedButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 393px;
  height: 54px;
  border-radius: 10px;
  background-color: #4f42e9;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: #4f42e9;
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

export const StyledDescription = styled.div`
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

export const StyledLink = styled(Link)`
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
  margin-bottom: 50px;
`;

export const StyledName = styled.div`
  margin-top: 18px;
  font-family: NotoSansCJKkr;
  font-size: 28px;
  color: #000000;
  font-weight: bolder;
`;

export const StyledDescriptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
