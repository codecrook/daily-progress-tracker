import styled from 'styled-components';
import { Section } from './components/Section';

const Title = styled.h1`
  color: #b19cd9;
`;


function App() {
  return (
    <>
      <Title>Daily Progress Tracker</Title>
      <div>
        <Section text="M" progress="100%" />
        <Section text="T" progress="80%" />
        <Section text="W" progress="70%" />
        <Section text="T" progress="60%" />
        <Section text="F" progress="50%" />
        <Section text="S" progress="40%" />
        <Section text="S" progress="30%" />
      </div>
    </>
  );
}

export default App;
