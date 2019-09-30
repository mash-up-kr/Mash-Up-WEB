import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

const StyledMain = styled.div``;
const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100vw;
  height: 120px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.28);
  background-color: #ffffff;
`;

const StyledNavText = styled.div<any>`
  width: 268px;
  height: 120px;
  background-color: ${({ white }) => !!white ? '#4f42e9' : '#ffffff'};
  font-family: NotoSansCJKjp;
  font-size: 25px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 120px;
  letter-spacing: normal;
  text-align: center;
  color: ${({ white }) => !!white ? '#ffffff' : '#4f42e9'};
  text-align: center;
`

const StyledUserInfo = styled.div`
    width: 360px;
    height: 120px;
    font-weight: 500;
    font-family: NotoSansCJKjp;
    font-size: 23px;
    font-weight: bold;
    line-height: 120px;
    color: #315efb;
    text-align: center;
    border-left: 2px solid #cacaca;
`;


const StyledNav = styled.nav`
  display: flex;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 163px;
  height: 120px;
`;

const StyledLogo = styled.div`
  width: 0px;
  height: 0px;
  background-color: red;
  border-top: 25px solid #ffffff;
  border-bottom: 25px solid #4f42e9;
  border-right: 25px solid #fc5e5d;
  border-left: 25px solid #4f42e9;
`;

const StyledName = styled.div`
  margin-top: 8px;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  color: #000000;
  font-weight: bolder;
`;

const StlyedLink = styled(Link)`
  text-decoration: none;
`;

const StyledH1 = styled.h1`
  margin-top: 40px;
  margin-left: 164px;
  font-family: NotoSansCJKjp;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.47;
  text-align: left;
  color: #282828;
`;

const StyledH1B = styled.b`
  font-family: NotoSansCJKjp;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: left;
  color: #282828;
`;

const StyledH2 = styled.h2`
  margin-left: 164px;
  font-family: NotoSansCJKjp;
  font-size: 23px;
  line-height: 1.48;
  text-align: left;
  color: #282828;
`;

const StyledHr = styled.div`
  margin-top: 40px;
  width: 100vw;
  height: 2px;
  background-color: #d0d6d9;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;

`;

const StyledPostButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #4f42e9;
`;

const StyledMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 72px;
  height: 22px;
  border: solid 1.5px #616a76;
`;


interface Props {

}

const Main: React.FC<Props> = () => {
  return (
    <StyledMain>
      <StyledPostButton>5</StyledPostButton>
      <StyledHead>
        <StyledNav>
          <StyledLogoWrapper>
            <StyledLogo />
            <StyledName>MASH UP</StyledName>
          </StyledLogoWrapper>
          <StlyedLink to="/">
            <StyledNavText white={true}>전체회의 공지</StyledNavText>
          </StlyedLink>
          <StlyedLink to="/">
            <StyledNavText>팀별 스터디 공지</StyledNavText>
          </StlyedLink>
          <StlyedLink to="/">
            <StyledNavText>앱프로젝트 공지</StyledNavText>
          </StlyedLink>
        </StyledNav>
        <Link to="/">
          <StyledUserInfo>
            디자인 고은이
          </StyledUserInfo>
        </Link>
      </StyledHead>
      <StyledH1>매쉬업 <StyledH1B>전체회의 공지</StyledH1B>를 확인하세요.</StyledH1>
      <StyledH2>총 10 회의 중 9번 참여</StyledH2>
      <StyledHr />
      <StyledCardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledCardWrapper>
      <StyledMoreButton>6</StyledMoreButton>
    </StyledMain>
  )
}

export default Main


