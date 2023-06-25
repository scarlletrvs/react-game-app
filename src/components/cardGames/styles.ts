import styled from 'styled-components';

export const ContainerCardGames = styled.button`
  height: 370px;
  width: 27.9%;
  margin-top:25px;
  margin: 3.7%;
  background-color: ${props => props.theme.colors.secundary};
  border-radius: 10px;
  box-shadow: 5px 4px 4px ${props => props.theme.colors.secundary};
  border: 5px solid ${props => props.theme.colors.Terciary};
  border-radius: 10px;
  margin-left:25.2px;
  cursor: pointer;

  &:hover {
    border: 7px solid ${props => props.theme.colors.text};
    box-shadow: 8px 8px 6px ${props => props.theme.colors.hover};
    

  }
div{
  display: flex;
  flex-direction: column;
  gap:4px;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  h1 {
    font-size: 20px;
    margin-top: 5px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
  }
  h1:hover{
    color:${props => props.theme.colors.texthover};
  }

  h3 {
    font-size: 16px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 14px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: ${props => props.theme.colors.text};
    
  }
  a{
    font-size: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: blue;
    padding-bottom: 4px;
  }

  

  div {
    height: 45%;
    width: 100%;
    flex-direction: column;
    margin-bottom: 14px;
    padding-bottom: 14px;
    

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;
    }
  }



}
  
  @media screen and (min-width: 1280px) and (max-width: 1280px) {

height: 325px;
  width: 360.5px;
  margin: 35.3px;
  margin-left:30px;

  div{
    gap:6px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
    h1 {
      font-size: 19px;
    }

    h3 {
      font-size: 13px;
    }

    p {
      font-size: 14px;
    }
    a{
      font-size: 16px;
      margin-top: 4px;
    
    }
  }
  div{
    width: 100%;
    height: 45%;
    padding-bottom: 15px;
    justify-content: flex-start;


    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }}
  @media screen and (min-width: 1024px) and (max-width: 1270px) {

height: 305px;
  width: 282.5px;
  margin: 27.3px;
  margin-left:30px;
  div{
    gap:4px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 15px;
    }

    h3 {
      font-size: 15px;
    }

    p {
      font-size: 15px;
    }
    a{
      font-size: 17px;
      margin-top: 4px;
    }
  } div{
    width: 100%;
    height: 45%;
    padding-bottom: 14px;


    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;
      

    }
  }}

  @media screen and (min-width: 912px) and (max-width: 1022px) {

height: 324px;
  width: 250.5px;
  margin: 20.3px;
  margin-left:30px;
  div{
    gap:4px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
    h1 {
      font-size: 15px;
      
    }

    h3 {
      font-size: 15px;
    }

    p {
      font-size: 13px;
    }
    a{
      font-size: 17px;
      margin-top: 4px;
    }
  } div{
    width: 100%;
    height: 45%;
    padding-bottom: 15px;
    justify-content: flex-start;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }}
  
  @media screen and (min-width: 820px) and (max-width: 910px) {

height: 310px;
  width: 240.5px;
  margin: 10.3px;
  margin-left:20px;
  div{
    gap:5px;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-bottom: 14px;
    h1 {
      font-size: 15px;
    }

    h3 {
      font-size: 13px;
    }

    p {
      font-size: 12px;
    }
    a{
      font-size: 15px;
      margin-top: 4px;
    }
  } div{
    width: 100%;
    height: 45%;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }}

  @media screen and (min-width: 768px) and (max-width: 818px) {

height: 305px;
  width: 220.5px;
  margin: 10.3px;
  margin-left:20px;
  div{
    gap:5px;
  flex-direction: column;
  display: flex;
  align-items: center;
  
    h1 {
      font-size: 15px;
    }

    h3 {
      font-size: 13px;
    }

    p {
      font-size: 12px;
    }
    a{
      font-size: 15px;
      margin-top: 4px;
    }
  } div{
    width: 100%;
    height: 45%;
padding-bottom: 5px;
padding-bottom: 14px;
    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }
  }

  @media screen and (min-width: 540px) and (max-width: 766px) {

height: 295px;
  width: 237.5px;
  margin: 10.3px;
  margin-left:21px;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 15px;
    }

    h3 {
      font-size: 12px;
    }

    p {
      font-size: 11px;
    }
    a{
      font-size: 13px;
      margin-top: 3px;
    }
  }
  div{
    width: 100%;
    height: 45%;
    justify-content: flex-start;
    padding-bottom: 16px;
    display: flex;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }


}
  @media screen and (min-width: 412px) and (max-width: 539px) {

height: 270px;
  width: 172.5px;
  margin: 5.3px;
  margin-left:20px;
  div{
    gap:4px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 14px;
    }

    h3 {
      font-size: 12px;
    }

    p {
      font-size: 11px;
    }
    a{
      font-size: 12px;
      margin-top: 4px;
    }
    img{

      border-top-left-radius:5px;
      border-top-right-radius:5px;
    }
  }
  div{
    width: 100%;
    height: 45%;
     padding-bottom:14px;
    img{
      width: 100%;
      height: 100%;

    }
  }
}
  @media screen and (min-width: 390px) and (max-width: 411px) {

    height: 265px;
  width: 160.5px;
  margin: 5.3px;
  margin-left:22px;
  
  div{
    gap:4px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 13px;
    }

    h3 {
      font-size: 10px;
    }

    p {
      font-size: 11px;
    }
    a{
      font-size: 10px;
      margin-top: 3px;
    }
    img{
      padding-bottom: 10px;
    }
  }
  div{
    width: 100%;
    height: 45%;
    padding-bottom:14px;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }
  }


  @media screen and (min-width: 370px) and (max-width: 389px) {
margin-top: 10px;
height: 280px;
  width: 160.5px;
  margin: 3.3px;
  margin-left:17px;
  padding-top: 2px;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
    h1 {
      font-size: 14px;
      margin-top: 0px;
    }

    h3 {
      font-size: 13px;
    }

    p {
      font-size: 13px;
    }
    div{
    width: 100%;
    height: 45%;
    padding-bottom: 5px;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }
    
  }
  div{
    width: 100%;
    height: 45%;
    padding-bottom: 15px;

    img{
      width: 100%;
      height: 100%;
      padding-bottom: 10px;
      border-top-right-radius:5px;
      border-top-left-radius:5px;

    }
  }}
  @media screen and (min-width: 360px) and (max-width: 369px) {
margin-top: 10px;
height: 270px;
  width: 326px;
  margin: 3.3px;
  margin-left:14.5px;
  div{
    gap:5px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 14px;
    }

    h3 {
      font-size: 12px;
    }

    p {
      font-size: 11px;
    }
  
    a{
      font-size: 11px;
      margin-top: 3px;
    }
 
  }
  div{
    width: 100%;
    height: 45%;
    padding-bottom: 14px;

    img{
      width: 100%;
      height: 100%;
      padding-bottom: 10px;
      border-top-right-radius:5px;
      border-top-left-radius:5px;

    }
  }}
  @media screen and (min-width: 280px) and (max-width: 292px) {
    margin-top: 10px;
height: 255px;
  width: 260.5px;
  margin: 3.3px;
  margin-left:10.5px;
  div{
    gap:5px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 12px;
    }

    h3 {
      font-size: 11px;
    }

    p {
      font-size: 10px;
    }
  
    a{
      font-size: 10px;
    }
   
  }
  div{
    width: 100%;
    height: 45%;
    padding-bottom: 12px;

    img{
      width: 100%;
      height: 100%;
      padding-bottom: 10px;
      border-top-right-radius:5px;
      border-top-left-radius:5px;

    }
  }
}
  

 
`;
