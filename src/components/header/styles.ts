import styled from 'styled-components';


export const Container = styled.div`

position: fixed;
top: 0;
height: 90px;
width: 100%;
background-color: ${props => props.theme.colors.primary} ;
align-items: center;
display: flex;
flex-direction: row;
justify-content: center;
gap:20px;
border: '2px solid black';
box-shadow: 4px 4px 7px 2px  ${props => props.theme.colors.secundary} ;
color: #fff ;

  h1{
  font-size: 20px;
font-weight: bold;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


}






@media screen and (min-width: 1280px) {
    h1{
        font-size: 35px;
    }
    padding-left: 25px;
    margin-right: 5px;
    height: 150px;
  }
  @media screen and (min-width: 1024px) {
    h1{
        font-size: 25px;
    }
 
    padding-left: 25px;
    margin-right: 5px;
    height: 150px;
  }




    
  @media screen and (min-width: 412px) {
    h1{
        font-size: 20px;
    }
 
    font-size: 18px;
    padding-left: 20px;
    margin-right: 20px;
    height: 70px;
  }


  @media screen and (min-width: 280px) {
    h1{
        font-size:16px;
    }
 
    font-size: 18px;
    padding-left: 20px;
    margin-right: 20px;
    height: 60px;
  }


  @media screen and (min-width: 360px) {
    h1{
        font-size:18px;
    }
 
    font-size: 18px;
    padding-left: 20px;
    margin-right: 20px;
    height: 68px;
  }

  @media screen and (min-width: 393px) {
    h1{
        font-size:20px;
    }
 
    font-size: 18px;
    padding-left: 20px;
    margin-right: 20px;
    height: 72px;
  }


  @media screen and (min-width: 390px) {
    h1{
        font-size:20px;
    }
 
    font-size: 18px;
    padding-left: 20px;
    margin-right: 20px;
    height: 72px;
  }
  @media screen and (min-width: 540px) {
    h1{
        font-size:22px;
    }
 
    font-size: 18px;
    padding-left: 20px;
    margin-right: 20px;
    height: 74px;
  }
  @media screen and (min-width: 912px) {
    h1{
        font-size:30px;
    }
 
    font-size: 18px;
    padding-left: 20px;
    margin-right: 20px;
    height: 95px;
  }
  @media screen and (min-width: 768px) {
    h1{
        font-size:28px;
    }
 
    font-size: 18px;
    padding-left: 20px;
    margin-right: 20px;
    height: 90px;
  }
  @media screen and (min-width: 820px) {
    h1{
        font-size:28px;
    }
 
    font-size: 18px;
    padding-left: 20px;
    margin-right: 20px;
    height: 90px;
  }
`;



