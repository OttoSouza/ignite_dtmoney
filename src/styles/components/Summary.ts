import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem; // 160px

  div {
      background: var(--shape);
      padding: 1rem 2rem;
      border-radius: 0.25rem;
      color: var(--text-title);

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      strong {
        display: block;
        font-size: 2rem;
        margin-top: 1rem;
        font-weight: normal;
        line-height: 3.5rem;
      }


      &.hightlight-background {
        background: var(--green);
        color: #fff;
      }
  }

  

`;
