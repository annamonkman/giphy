import styled from "styled-components";

export const StyledFinder = styled.div`
  .form {
    width: 100%;
    display: flex;
    flex-direction: row;
    &__input {
      flex-grow: 1;
      border: none;
      background-color: white;
      height: 40px;
      padding-left: 10px;
    }
    &__btn {
      width: 55px;
      border: none;
      background-color: pink;
      border-radius: none;
      background: rgb(136, 255, 86);
      background: linear-gradient(
        205deg,
        rgba(136, 255, 86, 1) 0%,
        rgba(72, 255, 218, 1) 48%,
        rgba(0, 212, 255, 1) 100%
      );
    }
  }

  .gallery {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    &__img {
      max-width: 150px;
      margin: 2px;
      border-radius: 4px;
    }
  }
`;
