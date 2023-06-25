import styled from 'styled-components';

export const ContainerNavbar = styled.div`
  width: 95%;
  height: 200px;
  display: flex;
 
  flex-direction: row;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.secundary};
  margin-left: 25px;
  border-radius: 15px;
  margin-bottom: 10px;
  box-shadow: 5px 6px 5px ${props => props.theme.colors.secundary};
  border: 3px solid ${props => props.theme.colors.Terciary};
  cursor: default;
;

div{
  
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left:190px;
    h2{
    font-size: 20px;
    letter-spacing: 1px;
    text-align: left;
    text-align: center;
    
}
p{
    letter-spacing: 1px;
    font-size: 16px;
    margin-left: 38px;
    text-align: center;
}
}

@media screen and (min-width: 1280px) and (max-width: 1280px) {
 height: 300px;
 
 margin-left:22px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 25px;
      text-align: center;
    margin-left: 16px;

    }

    p {
      font-size: 19px;
      text-align: center;
      margin-left: 15px;
    }
  }
  }
  gap:10px;
  
  @media screen and (min-width: 1024px) and (max-width: 1270px) {
    height: 300px;
 
 margin-left:22px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 24px;
      text-align: center;
    margin-left: 16px;

    }

    p {
      font-size: 18px;
      text-align: center;
      margin-left: 15px;
    }
  }
  }
  gap:10px;
  @media screen and (min-width: 912px) and (max-width: 1022px) {
    height: 280px;
  width:94%;
 margin-left:22px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 22px;
      text-align: center;
    margin-left: 16px;

    }

    p {
      font-size: 17px;
      text-align: center;
      margin-left: 15px;
    }
  }
  }
  gap:10px;

 @media screen and (min-width: 820px) and (max-width: 910px) {
  height: 270px;
  width:94%;
 margin-left:22px;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 20px;
      text-align: left;
    margin-left: 16px;

    }

    p {
      font-size: 16px;
      text-align: center;
      margin-left: 15px;
    }
  }
  }
  @media screen and (min-width: 768px) and (max-width: 818px) {
    height: 250px;
  width:93%;
 margin-left:22px;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 19px;
      text-align: center;
    margin-left: 16px;

    }

    p {
      font-size: 17px;
      text-align: center;
      margin-left: 15px;
    }
  }
  }
  @media screen and (min-width: 540px) and (max-width: 766px) {
    height: 225px;
  width:93%;
 margin-left:22px;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 14px;
      margin-left:28px;
      text-align: center;
    }

    p {
      font-size: 12px;
      text-align: left;
    }
  }}
  @media screen and (min-width: 412px) and (max-width: 539px) { 
    height: 180px;
  width:88%;
 margin-left:20px;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 13px;
      text-align: left;
    margin-left: 16px;

    }

    p {
      font-size: 11px;
      text-align: left;
      margin-left: 15px;
    }
  }}

  @media screen and (min-width: 390px) and (max-width: 411px) {

height: 170px;
  width:350px;
 margin-left:15px;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 13px;
      text-align: left;
    margin-left: 16px;

    }

    p {
      font-size: 11px;
      text-align: left;
      margin-left: 15px;
    }
  }}

  @media screen and (min-width: 370px) and (max-width: 389px) {
    height: 160px;
  width:340px;
 margin-left:15px;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 13px;
      text-align: left;
    margin-left: 16px;

    }

    p {
      font-size: 11px;
      text-align: left;
      margin-left: 15px;
    }
  }
  }

  @media screen and (min-width: 360px) and (max-width: 369px) {
    height: 155px;
  width:330px;
 margin-left:11px;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 13px;
      text-align: left;
    margin-left: 16px;

    }

    p {
      font-size: 11px;
      text-align: left;
      margin-left: 15px;
    }
  }}

  @media screen and (min-width: 280px) and (max-width: 292px) {
    height: 135px;
  width:94%;
 margin-left:5px;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 10px;
      text-align: left;
    margin-left: 16px;

    }

    p {
      font-size:9px;
      text-align: left;
      margin-left: 15px;
    }
  }
  }
  `; 