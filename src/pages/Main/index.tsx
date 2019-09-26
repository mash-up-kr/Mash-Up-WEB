import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import deleteIcon from '../../images/icon_delete.svg'
import authorImage from '../../images/icon_writer.svg'
import dateIcon from '../../images/icon_date.svg'
import clockIcon from '../../images/icon_clock.svg'
import placeIcon from '../../images/icon_place.svg'
import editIcon from '../../images/icon_edit.svg'
import voteIcon from '../../images/icon_vote.svg'

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



interface Props {

}

const Main: React.FC<Props> = () => {
  return (
    <StyledMain>
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
      <StyledCardWrapper>
      <StyledCardHead>
        <StyledCategory>MASH-UP</StyledCategory>
        <StyledDeleteImage src={deleteIcon} alt=""/>
        </StyledCardHead>
        <StyledCardBody>
          <StyledCatdTitle>전체회의 공지</StyledCatdTitle>
          <StyledAuthorWrapper>
            <StyledAuthorImage src={authorImage} alt="" />
            <StyledAuthorName>동그래</StyledAuthorName>
          </StyledAuthorWrapper>
          <StyledHr />
          <StyledCardInfoWrapper>
            <StyledCardInfo>
              <StyledCardInfoImage src={dateIcon} alt="" />
              <StyledCardInfoText>강남역 8번 출구 하이퍼커넥트 14층</StyledCardInfoText>
            </StyledCardInfo>
            <StyledCardInfo>
              <StyledCardInfoImage src={clockIcon} alt="" />
              <StyledCardInfoText>강남역 8번 출구 하이퍼커넥트 14층</StyledCardInfoText>
            </StyledCardInfo>
            <StyledCardInfo>
              <StyledCardInfoImage src={placeIcon} alt="" />
              <StyledCardInfoText>강남역 8번 출구 하이퍼커넥트 14층</StyledCardInfoText>
            </StyledCardInfo>
          </StyledCardInfoWrapper>
          <StyledHr />
          <StyledDescription>
          이번 전체회의에서는 디자인을 잘 하는 방법에 대한 세미나가 있을 예정입니다. 함께 팀활동을 할 예정이니, 노트북을 가져와주시길 바랍니다. 그 후에는 자유롭게 프로젝트팀 회의 시간을 드릴 예정입니다. 오시는 분들 모두 회의 준비도 열시뮈 해서 만나요!!
          </StyledDescription>
          <StyledHr />
          <StyledFixBoxWrapper>
            <StyledFixBox>
              <StyledFixBoxImage src={editIcon} alt="" />
              <StyledFixBoxText>투표 | 00명 참여 중</StyledFixBoxText>
              <StyledFixBoxArrow>></StyledFixBoxArrow>
            </StyledFixBox>
            <StyledFixBox>
              <StyledFixBoxImage src={voteIcon} alt="" />
              <StyledFixBoxText>투표 | 00명 참여 중</StyledFixBoxText>
              <StyledFixBoxArrow>></StyledFixBoxArrow>
            </StyledFixBox>

          </StyledFixBoxWrapper>
        </StyledCardBody>
        </StyledCardWrapper>
    </StyledMain>
  )
}

export default Main


const StyledCardWrapper = styled.div`
  width: 420px;
  height: 530px;
  /* background-color: #ffffff */
  background-color: red;
`;

const StyledCategory = styled.div`
  width: 122px;
  height: 34.7px;
  border-radius: 35px;
  background-color: #ffb941;
  line-height: 34.7px;
  text-align: center;
  margin-left: 16px;
`;

const StyledCardHead = styled.div`
  width: 420px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDeleteImage = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 24px;
`;

const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const StyledCatdTitle = styled.div`
  height: 47.1px;
  font-family: NotoSansCJKjp;
  font-size: 27px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.48;
  letter-spacing: -0.68px;
  text-align: center;
  color: #525c69;
`;

const StyledAuthorWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const StyledAuthorImage = styled.img`
  width: 33.3px;
  height: 33.3px;
  object-fit: contain;
`;

const StyledAuthorName = styled.span`
  height: 29.9px;
  font-family: NotoSansCJKjp;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 29.9px;
  letter-spacing: -0.4px;
  text-align: left;
  color: #4b9efd;
`;

const StyledHr = styled.hr`
  width: 420px;
  height: 1px;
  background-color: #ededed;
`;

const StyledCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCardInfo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCardInfoImage = styled.img`
  width: 33.3px;
  height: 33.3px;
  object-fit: contain;
`;
const StyledCardInfoText = styled.div`
  width: 277.2px;
  height: 30.5px;
  font-family: NotoSansCJKjp;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 30.5px;
  letter-spacing: -0.4px;
  text-align: left;
  color: #262626;
`;

const StyledDescription = styled.div`
  margin: 0 36px;
  width: 350px;
  height: 124px;
  font-family: NotoSansCJKjp;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;
  color: #262626;
`;

const StyledFixBoxWrapper = styled.div`
  display: flex;
`;

const StyledFixBox = styled.div`
  flex: 1;
`;

const StyledFixBoxImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const StyledFixBoxText = styled.span`
  display: inline-block;
  height: 23px;
  font-family: NotoSansCJKjp;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: -0.38px;
  text-align: left;
  color: #757575;
`;

const StyledFixBoxArrow = styled.span`
  display: inline-block;
  width: 6.7px;
  height: 11.1px;
  border: solid 0.8px #757575;
  `;
