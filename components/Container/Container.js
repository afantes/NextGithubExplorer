import styled from 'styled-components';

const StyledContainer = styled.div`
    background-color: #fff;
    max-width: 500px;
    margin: 60px auto ;
    border-radius: 5px;
`;

const Container = ({ children }) => (
    <StyledContainer>
        {children}
    </StyledContainer>
);

export default Container;