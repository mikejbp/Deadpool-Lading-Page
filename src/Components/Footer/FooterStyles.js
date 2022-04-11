import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: var(--primary);
  position: relative;
  

  @media (max-width: 100vh) {
    padding: 80px 40px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100vh;
    margin: 0 auto;
    /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
  minmax(185px, 1fr));
  grid-gap: 1rem;

  @media (max-width: 100vh) {
    grid-template-columns: repeat(auto-fill, 
    minmax(100%, 25rem));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 12px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: var(--slate);
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;