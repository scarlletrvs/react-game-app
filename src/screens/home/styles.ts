import styled from 'styled-components';

export const ContainerHome = styled.div`
padding-top: 105px;
  div {
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
     gap: 6px;
    
     select{
      width: 20%;
      height: 35%;
      background-color: ${props => props.theme.colors.barrapesquisa};
      color: ${props => props.theme.colors.text};
      cursor: pointer;
      padding: 2px;
    font-size: 13px;
    font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 3px solid ${props => props.theme.colors.Terciary};
    border-radius: 20px;
    margin-bottom: 2px;
   
    option{
      font-size: 13px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    option:hover{
      background-color: ${props => props.theme.colors.primary};
      
    }
    }

    &:hover{
    border: 4px solid ${props => props.theme.colors.select};
    box-shadow: 7px 7px 5px ${props => props.theme.colors.hover};
  }
     }
  

  }

  input {
    height: 18px;
    width: 50%;
    background-color: ${props => props.theme.colors.barrapesquisa};
    padding: 8px;
    font-size: 11px;
    font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 3px solid ${props => props.theme.colors.Terciary} ;
    border-radius: 25px;
    color: ${props => props.theme.colors.text};
    margin-top: 2px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    cursor: default;

  justify-content: center;
  &:hover{
    border: 3px solid ${props => props.theme.colors.select};
    box-shadow: 2px 2px 2px ${props => props.theme.colors.hover};
  }
  }


  select{
   
  }

  @media screen and (min-width: 1290px) and (max-width: 1300px) {
    padding-top:95px;

div {
  
     gap: 2px;
    

     input {
  width: 40%;
  height: 35px;

}
     select{
      width: 40px;
    
      
}}
  }

  @media screen and (min-width: 1201px) and (max-width: 1289px){
    padding-top:8%;
    input {
      width:40%;
      height: 20%;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
    select{
      width: 20%;
    }
  }
  @media screen and (min-width: 1100px) and (max-width: 1200px){
    padding-top:10%;
    input {
      width:40%;
      height: 20%;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
    select{
      width: 20%;
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1100px){
    padding-top:12%;
    input {
      width:40%;
      height: 20%;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
    select{
      width: 20%;
    }
  }


  @media screen and (min-width: 800px) and (max-width: 999px){
    padding-top:12%;
    input {
      width:30%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
    select{
      width: 10%;
      height:25%;
    }
  }




  
  @media screen and (min-width: 700px) and (max-width: 799.9px){
    padding-top:11%;
    input {
      width:30%;
      height: 8%;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
    select{
      width: 8%;
    }
  }


  @media screen and (min-width: 651px) and (max-width: 699px){
    padding-top:11.9%;
    input {
      width:27%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
    select{
      width: 8%;
    }
  }



  @media screen and (min-width: 600px) and (max-width: 650px){
    padding-top:12.9%;
    input {
      width:27%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
    select{
      width: 8%;
    }
  }

  @media screen and (min-width: 550px) and (max-width: 599px){
    padding-top:14.3%;
    input {
      width:28%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
    select{
      width: 8%;
    }
  }

  @media screen and (min-width: 500px) and (max-width: 549px){
    padding-top:14.7%;
    input {
      width:27%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
    select{
      width: 8%;
    }
  }
  @media screen and (min-width: 450px) and (max-width: 499px){
    padding-top:16.4%;
    input {
      width:27%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:12px;
    }
    select{
      width: 8%;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 449px){
    padding-top:18.4%;
    input {
      width:27%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:12px;
    }
    select{
      width: 8%;
    }
  }
  @media screen and (min-width: 350px) and (max-width: 399px){
    padding-top:20.4%;
    input {
      width:27%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:12px;
    }
    select{
      width: 10%;
    }
  }



  @media screen and (min-width: 300px) and (max-width: 349px){
    padding-top:22.4%;
    input {
      width:27%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:12px;
    }
    select{
      width: 8%;
    }
  }

  @media screen and (min-width: 250px) and (max-width: 270px){
    padding-top:38.4%;
    input {
      width:27%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:12px;
    }
    select{
      width: 8%;
    }



  }

  
  @media screen and (min-width: 270px) and (max-width: 299px){
    padding-top:24.4%;
    input {
      width:27%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:12px;
    }
    select{
      width: 8%;
    }


    
  }

  
  @media screen and (min-width: 220px) and (max-width: 240px){
    padding-top:45.4%;
    input {
      width:23%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:12px;
    }
    select{
      width: 8%;
      font-size: 10px;
    }
  }



  @media screen and (min-width: 241px) and (max-width: 250px){
    padding-top:40.4%;
    input {
      width:23%;
      height: 10%;
      border-radius:24px;
      margin-top: 3px;
      font-size:12px;
    }
    select{
      width: 8%;
      font-size: 10px;
    }
  }

`;


