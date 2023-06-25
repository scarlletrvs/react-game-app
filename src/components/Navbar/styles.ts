import styled from 'styled-components';

export const ContainerNavbar = styled.div`
  width: 94%;
  height: 30%;
  display: flex;
 
  flex-direction: row;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.secundary};
  margin-left: 25px;
  border-radius: 15px;
 
  box-shadow: 5px 6px 5px ${props => props.theme.colors.secundary};
  border: 3px solid ${props => props.theme.colors.Terciary};
  cursor: default;
;

div{
  
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left:10%;
    width: 50%;
    height: 100%;
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
height: 25%; 
 margin-left:3%;
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
    height: 25%;
    width: 94%;
 
 margin-left:3%;
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
    height: 25%;
  width:94%;
 margin-left:3%;
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

 @media screen and (min-width: 819px) and (max-width: 910px) {
  height: 25%;
  width:94%;
 margin-left:3%;
 margin-bottom:10px;
 align-items: center;
 justify-content:center ;
 display: flex;
 gap:0px;
 div{
  padding-left: 0px;

    h2 {
      font-size: 20px;
      text-align: center;
   

    }

    p {
      font-size: 16px;
      text-align: center;
    
    }
  }
  }
  @media screen and (min-width: 768px) and (max-width: 818px) {
    height: 30%;
  width:94%;
 margin-left:3%;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 16px;
      text-align: center;
  

    }

    p {
      font-size: 13px;
      text-align: center;
     
    }
  }
  }
  @media screen and (min-width: 540px) and (max-width: 767px) {
    height: 25%;
  width:94%;
 margin-left:3%;
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
  @media screen and (min-width: 404px) and (max-width: 539px) { 
    height: 25%;
  width:94%;
 margin-left:3%;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 12px;
      text-align: left;
    margin-left: 4%;

    }

    p {
      font-size: 11px;
      text-align: left;
      margin-left: 4%;
    }
  }}

  

  @media screen and (min-width: 370px) and (max-width: 403.9px) {
    height: 45%;
  width:94%;
 margin-left:3%;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 12px;
      text-align: left;
    margin-left: 3%;

    }

    p {
      font-size: 11px;
      text-align: left;
      margin-left: 3%;
    }
  }
  }

 



  @media screen and (min-width: 280px) and (max-width: 369.9px) {
    height: 30%;
  width:94%;
 margin-left:3%;
 margin-bottom:10px;
 div{
  padding-left: 0px;
    h2 {
      font-size: 9px;
      text-align: left;
    margin-left: 4%;

    }

    p {
      font-size:7px;
      text-align: left;
      margin-left: 4%;
    }
  }
  }


  @media screen and (min-width: 200px) and (max-width: 279px) {
    height: 40%;
  width:94%;
 margin-left:3%;
 margin-bottom:10px;
 div{
  padding-left: 0px;
  gap:1px;
    h2 {
      font-size: 8px;
      text-align: left;
    margin-left: 4%;

    }

    p {
      font-size:6px;
      text-align: left;
      margin-left: 4%;
    }
  }
  }
  `; 