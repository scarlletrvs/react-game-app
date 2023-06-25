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

div{
  display: flex;
  flex-direction: column;
  gap:6px;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  width: 100%;
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

}

@media screen and (min-width: 1281px) and (max-width: 1400px) {

  height: 45%;
  width: 45%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 27px;
    }

    h3 {
      font-size: 15px;
    }

    p {
      font-size: 13px;
    }
    a{
      font-size: 20px;
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



@media screen and (min-width: 1126px) and (max-width: 1280px) {

height: 40%;
  width: 45.5%;
  margin: 0.8%;
  margin-top: 1.5%;;
  margin-left:3%;
  div{
    gap:8px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 24px;
      margin-top:0px;
    }

    h3 {
      font-size: 17px;
    }

    p {
      font-size: 14px;
    }
    a{
      font-size: 19px;
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

@media screen and (min-width: 1025px) and (max-width: 1125px) {

height: 44.5%;
margin-top: 1%;
  margin: 0.5%;
  margin-left:3%;
  div{
    gap:8px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 24px;
      margin-top:0px;
    }

    h3 {
      font-size: 17px;
    }

    p {
      font-size: 14px;
    }
    a{
      font-size: 19px;
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

  
  @media screen and (min-width: 912px) and (max-width: 1024px) {

height: 295px;
  width: 43%;
  margin-top: 1%;
  margin: 0.5%;
  margin-left:3%;
  div{
    gap:5px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    p {
      font-size: 15px;
    }
    a{
      font-size: 19px;
      margin-top: 3px;
    }
  }
  div{
    width: 100%;
    height: 45%;
    justify-content: flex-start;
  
    display: flex;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }


}

  
  
 
  @media screen and (min-width: 841px) and (max-width: 911px) {

height: 295px;
  width: 45.3%;
  margin: 1%;
  margin-left:3%;
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



  @media screen and (min-width:1101px) and (max-width: 1200px) {

height: 45%;
  width: 45.6%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 26px;
      margin-top:0px;
    }

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 13px;
    }
    a{
      font-size: 15px;
      margin-top: 3px;
    }
  }
  div{
    width: 100%;
    height: 45%;
    justify-content: flex-start;
  
    display: flex;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }


}
  
  @media screen and (min-width: 1000px) and (max-width: 1100px) {

    height: 45%;
  width: 45.6%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 25px;
      margin-top:0px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
    a{
      font-size: 16px;
      margin-top: 3px;
    }
  }
  div{
    width: 100%;
    height: 45%;
    justify-content: flex-start;
   
    display: flex;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }


}

@media screen and (min-width: 901px) and (max-width: 999px) {

  height: 45%;
  width: 45.6%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 23px;
      margin-top:0px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
    a{
      font-size: 16px;
      margin-top: 3px;
    }
  }
  div{
    width: 100%;
    height: 45%;
    justify-content: flex-start;
   
    display: flex;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }


}




  @media screen and (min-width: 801px) and (max-width: 900px) {
    height: 45%;
  width: 45%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 21px;
      margin-top:0px;
    }

    h3 {
      font-size: 15px;
    }

    p {
      font-size: 13px;
    }
    a{
      font-size: 15px;
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

 

  

  @media screen and (min-width: 701px) and (max-width: 800px) {

    height: 45%;
  width: 45%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 20px;
      margin-top:0px;

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 13px;
    }
    a{
      font-size: 14px;
      margin-top: 3px;
    }
  }
  div{
    width: 100%;
    height: 45%;
    justify-content: flex-start;
   
    display: flex;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }}


}

  @media screen and (min-width: 600px) and (max-width: 700px) {

    height: 45%;
  width: 45%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 17px;
      margin-top:0px;  
      
      @media screen and (min-width: 570px) and (max-width: 620px) {

height: 45%;
  width: 45%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:3px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 15px;
      margin-top:0px;
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
    }

    h3 {
      font-size: 13px;
    }

    p {
      font-size: 12px;
    }
    a{
      font-size: 14px;
      margin-top: 3px;
    }
  }
  div{
    width: 100%;
    height: 45%;
    justify-content: flex-start;
    padding-bottom: 12px;
    display: flex;

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }


}



@media screen and (min-width: 521px) and (max-width: 600px) {

  height: 45%;
  width: 44.2%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:4px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 15px;
      margin-top: 0px;
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
     
    img{
      width: 100%;
      height: 100%;

    }
  }
}



@media screen and (min-width: 489px) and (max-width: 520px) {

  height: 45%;
  width: 42%;
  margin: 1%;
  margin-left:3%;
  div{
    gap:4px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 15px;
      margin-top:0px;
    }

    h3 {
      font-size: 12px;
    }

    p {
      font-size: 11px;
    }
    a{
      font-size: 13px;
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
 
    img{
      width: 100%;
      height: 100%;

    }
  }
}


  @media screen and (min-width: 390px) and (max-width: 488px) {

    height: 45%;
  width:42%;
  margin: 1%;
  margin-left:3%;
  
  div{
    gap:4px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 15px;
      margin-top:0px;
    }

    h3 {
      font-size: 12px;
    }

    p {
      font-size: 11px;
    }
    a{
      font-size: 12px;
      margin-top: 3px;
    }
    
  }
  div{
    width: 100%;
    height: 45%;
   

    img{
      width: 100%;
      height: 100%;
      border-top-left-radius:5px;
      border-top-right-radius:5px;

    }
  }
  }


  @media screen and (min-width: 360px) and (max-width: 389.9px) {
margin-top: 10px;
height: 40%;
  width: 94%;
  margin: 1%;
  margin-left:3%;
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
   

    img{
      width: 100%;
      height: 100%;
    
      border-top-right-radius:5px;
      border-top-left-radius:5px;

    }
  }}
 
  @media screen and (min-width: 280px) and (max-width: 360px) {
    margin-top: 10px;
    height: 40%;
  width: 94%;
  margin: 3.3px;
  margin-left:3%;
  div{
    gap:7px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 12px;
      margin-top:0px;
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
    

    img{
      width: 100%;
      height: 100%;
      
      border-top-right-radius:5px;
      border-top-left-radius:5px;

    }
  }
}

@media screen and (min-width: 293px) and (max-width: 305px) {
    margin-top: 10px;
    height: 40%;
  width: 94%;
  margin: 3.3px;
  margin-left:3%;
  div{
    gap:7px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 12px;
      margin-top:0px;
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
    height: 40%;

    img{
      width: 100%;
      height: 100%;
   
      border-top-right-radius:5px;
      border-top-left-radius:5px;

    }
  }
}

@media screen and (min-width: 200px) and (max-width: 292px) {
    margin-top: 10px;
    height: 40%;
  width: 94%;
  margin: 3.3px;
  margin-left:3%;
  div{
    gap:5px;
  flex-direction: column;
  display: flex;
  align-items: center;
    h1 {
      font-size: 12px;
      margin-top:0px;
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


    img{
      width: 100%;
      height: 100%;
 
      border-top-right-radius:5px;
      border-top-left-radius:5px;

    }
  }
}
  

 
`;
