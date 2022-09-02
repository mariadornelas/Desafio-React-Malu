import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteModalContainer = styled.div`
  padding: 3rem 4rem;
  max-width: 80vw;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  p {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    margin-top: 1.5rem;

    @media(max-width: 960px) {
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
  }

  @media(max-width: 960px) {
    padding: 2rem;
  }
`;


export const PreviewModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  background-color: #fff;
  border-radius: 5px;

  img {
    width: 600px;
    height: auto;
    border-radius: 5px;

    @media(max-width: 960px) {
      width: 80vw;
      height: auto;
    }
  }

  div {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 1rem;
    border-radius: 999px;
    z-index: 10;
    
    cursor: pointer;

    font-size: 2rem;
    background-color: #fff;
    color: #000;
  }
`;


export const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: ${props => props.primary ? "#ff4747" : "#fff"};
  color: ${props => props.primary ? "#fff" : "#ff4747"};
  border: ${props => props.primary ? "none" : "1px solid #ff4747"};
  border-radius: 5px;
  cursor: pointer;

  font-size: 1rem;

  @media(max-width: 960px) {
    width: 100%;
  }
`;
