import styled from "styled-components";

export const StyledMainDesktop = styled.div`
  width: 95%;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  .component {
    width: 200px;
    margin: 0 auto;
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
        color: ${(props) => props.theme.colors.trending};
        margin-right: 20px;
      }
      .random-svg {
        color: ${(props) => props.theme.colors.random};
        margin-right: 20px;
      }
      .search-svg {
        color: ${(props) => props.theme.colors.finder};
        transform: scaleX(-1);
        margin-right: 20px;
      }
    }
  }
  .component:nth-child(1) {
    flex-grow: 1;
  }
  .component:nth-child(2) {
    flex-grow: 3;
  }
  .component:nth-child(3) {
    flex-grow: 1;
  }
`;
