import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: var(--primary-color);

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}

export default function HomePage() {
  return (
    <>
      <h1>Hello from Next.js</h1>
      <Button text={"hello"}>click me</Button>

      <p>
        <StyledLink href="/">click me</StyledLink>
      </p>
    </>
  );
}
