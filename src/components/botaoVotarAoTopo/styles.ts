import styled from 'styled-components';

export const ContainerBotaoVoltarTopo = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;

  button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-items: center;
    display: flex;
    justify-content: center;
    border: 4px solid ${props => props.theme.colors.botaoVoltar};
    cursor: pointer;

  }

  button:hover {
    background-color: ${props => props.theme.colors.colorHover};
    border: 5px solid ${props => props.theme.colors.voltarHover};
    box-shadow: 8px 7px 5px ${props => props.theme.colors.hover};
   
  }
`;
