import styled from "styled-components";

export const StyledRandom = styled.div`
  .img-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
    }
    button {
      width: 180px;
      height: 45px;
      margin-top: 30px;
      margin-bottom: 15px;
      color: black;
      background: rgb(182, 59, 255);
      background: linear-gradient(
        205deg,
        rgba(182, 59, 255, 1) 0%,
        rgba(255, 94, 190, 1) 48%,
        rgba(255, 188, 56, 1) 100%
      );
    }
  }
`;
