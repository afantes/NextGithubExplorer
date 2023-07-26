import styled from 'styled-components';
import Container from '@/components/Container/Container';

const StyledParagraph = styled.p`
    font-size: 17px;
    line-height: 1.8;
    color: #333;
    text-align: center;
    padding: 40px;
`;

export default function About() {
    return (
        <Container>
            <StyledParagraph>
                Welcome to our Next.js-based application! Our application allows you to explore GitHub repositories for a specific user. You can search for a GitHub username and get a list of repositories associated with that user. <br /><br />Our application utilizes Next.js to provide a seamless navigation experience and advanced features.<br /><br />Easily explore GitHub repositories with our Next.js application.
            </StyledParagraph>
        </Container>
    );
}