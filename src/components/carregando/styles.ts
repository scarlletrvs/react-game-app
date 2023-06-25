import styled from 'styled-components';

export const ContainerCarregando = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
align-items: center;
p{
    font-size: 16px;
    font-weight: bold;
}
img{
    width: 70%;
    height: auto;
}


@media screen and (min-width: 1280px) {
    margin-top: 5px;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 25px;
    }

    img {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-top: 5px;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 25px;
    }

    img {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (min-width: 280px) {
  
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  p {
    font-size: 20px;
  }

  img {
    width: 90%;
    height: auto;
  }
}
@media screen and (min-width: 412px) {
   margin-top: 5px;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 20px;
  }

  img {
    width: 80%;
    height: auto;
  }
}

`;

