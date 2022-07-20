import styled from "styled-components";

export const StyledMainMobile = styled.div`
  width: 100%;
  padding: 15px;
  .component {
    margin: 0 auto;
    background-color: black;
    padding: 10px;
    .component__heading {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      .component__heading__text {
        color: white;
        font-weight: 600;
        font-size: 20px;
        margin: 0;
      }
      .component__heading__icon {
        display: none;
      }
    }
  }
`;
