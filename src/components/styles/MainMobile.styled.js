import styled from "styled-components";

export const StyledMainMobile = styled.div`
  width: 100%;
  padding: 0;
  .component {
    width: 95%;
    margin: 0 auto;
    background-color: black;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
    .heading {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      h1 {
        color: white;
        font-weight: 600;
        font-size: 20px;
        margin: 0;
      }
      .trending-svg {
        display: none;
      }
      .random-svg {
        display: none;
      }
      .search-svg {
        display: none;
      }
    }
  }
`;
