import styled from 'styled-components';

export const ContainerHome = styled.div`
padding-top: 105px;
  div {
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
     gap: 30px;
    
     select{
      width: 200px;
      height: 35px;
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
  @media screen and (min-width: 1024px) and (max-width: 1288px){
    padding-top:95px;
    input {
      width:40%;
      height: 25px;
      border-radius:24px;
      margin-top: 3px;
      font-size:14px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 818px)
    {
      padding-top: 94px;
      div{
        gap:10px;
    input {
      width: 40%;
      height: 24px;
      border-radius: 25px;
      margin-top: 5px;
    }
    select{
      width: 130px;
    }
  }
}
  @media screen and (min-width: 280px) and (max-width:300px){
    padding-top: 70px;
  div{
    gap:8px;
input {
  width: 30%;
  height: 18px;
  border-radius: 20px;
}
select{
  width: 65px;
  height: 30px;
  margin-bottom: 5px;
}
}
}

@media screen and (min-width: 370px) and (max-width: 389px) {
  padding-top: 80px;
  div{
    gap:8px;
input {
  width: 35%;
  height: 18px;
  border-radius: 20px;
}
select{
  width: 80px;
  height: 30px;
  margin-bottom: 5px;
}
}
}

@media screen and (min-width: 390px) and (max-width: 411px) {
  padding-top: 80px;
  div{
    gap:8px;
input {
  width: 35%;
  height: 18px;
  border-radius: 20px;
}
select{
  width: 80px;
  height: 30px;
  margin-bottom: 5px;
  font-size: 11px;
}
}
}

@media screen and (min-width: 540px) and (max-width: 766px){
  padding-top: 94px;
      div{
        gap:8px;
    input {
      width: 40%;
      height: 24px;
      border-radius: 25px;
      margin-top: 5px;
    }
    select{
      width: 115px;
      font-size: 11px;
      font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    option{
      font-size: 10px;
      width: 115px;
    }
  }
}

@media screen and (min-width: 912px) and (max-width: 1022px) {
  padding-top:95px;
  div{
    gap:10px;
input {
  width: 40%;
  height: 30px;
  border-radius: 27px;
  margin-top: 5px;
  font-size: 17px;
}
}}
@media screen and (min-width: 360px) and (max-width: 369px){
  padding-top: 80px;
  div{
    gap:8px;
input {
  width: 35%;
  height: 18px;
  border-radius: 20px;
}
select{
  width: 80px;
  height: 30px;
  margin-bottom: 5px;
  font-size: 11px;
}
}}
@media screen and (min-width: 412px) and (max-width: 539px){
  padding-top: 76px;
  div{
        gap:8px;
    input {
      width: 35%;
      height: 24px;
      border-radius: 25px;
      margin-top: 5px;
    }
    select{
      width: 85px;
      font-size: 11px;
      font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    option{
      font-size: 10px;
      width: 115px;
    }
  }}
@media screen and (min-width: 820px) and (max-width: 910px) {
  padding-top:94px;

  div{
input {
  width: 40%;
  height: 30px;
  border-radius: 25px;
margin-top: 5px;
font-size: 16px;
}

select{
  width:150px;
  height: 309x;
}}
}
  

`;


