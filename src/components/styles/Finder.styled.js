import styled from "styled-components";

export const StyledFinder = styled.div`
  .input-button {
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: row;
    input {
      flex-grow: 1;
      border: none;
      background-color: white;
      height: 40px;
      padding-left: 10px;
    }
    /* input::placeholder {
      padding-left: 8px;
    } */
    button {
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

  .search-gallery {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    img {
      max-width: 150px;
      margin: 2px;
      border-radius: 4px;
    }
  }
`;
