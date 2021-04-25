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
        <Section text="M" progress="100%" day={1} />
        <Section text="T" progress="80%" day={2} />
        <Section text="W" progress="70%" day={3} />
        <Section text="T" progress="60%" day={4} />
        <Section text="F" progress="50%" day={5} />
        <Section text="S" progress="40%" day={6} />
        <Section text="S" progress="30%" day={7} />
      </div>
    </>
  );
}

export default App;
