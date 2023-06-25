import styled from 'styled-components';

export const ContainerCustomAlert = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 30%;
  height: 17%;
  background-color: ${props => props.theme.colors.Terciary};
  color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 6px 6px 7px 4px  ${props => props.theme.colors.secundary} ;
  font-size: 15px;
  font-weight: bold;
  padding: 3%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: 3px solid ${props => props.theme.colors.Terciary};

  button {
    width: 20%;
    height: 30%;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 15px;
  }

  @media screen and (min-width: 285px) and (max-width: 545px) {
    width: 95%;
    height: 20%;
    font-size: 14px;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 6px;
    text-align: center;
    button{
    font-size: 10px;
    width: 20%;
    height: 15%;
    border: 2px solid black;
    display: flex;
    margin-top: 15px;
    }
  }

  @media screen and (min-width: 279px) and (max-width: 284px) {
    width: 90%;
    height: 20%;
    font-size: 13px;
    flex-direction: column;
    text-align: center;

    button{
        font-size: 12px;
        margin-left: 20px;
        width: 49px;
        height: 28px;
        margin-top: 10px;
       
    }
  }

  @media screen and (min-width: 765px) and (max-width: 1285px) {
    width: 90%;
    height: 16%;
    font-size: 22px;

    display: flex;
    flex-direction: column;
    gap:10px;
    text-align: center;
    button{
        font-size: 15px;
        margin-left: 20px;
        width: 70px;
        height: 35px;
        margin-top: 20px;
       
    }
  }

 
`;
