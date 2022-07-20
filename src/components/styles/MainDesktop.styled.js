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
        margin-right: 20px;
      }
      .component__heading__icon--trending {
        color: ${(props) => props.theme.colors.trending};
      }
      .component__heading__icon--random {
        color: ${(props) => props.theme.colors.random};
      }
      .component__heading__icon--finder {
        color: ${(props) => props.theme.colors.finder};
        transform: scaleX(-1);
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
