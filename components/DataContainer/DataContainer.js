import styled from 'styled-components';

const StyledDataContainer = styled.div`
    padding: 0px 30px 30px;
    text-align: center;
`;

const DataContainer = ({ children }) => (
    <StyledDataContainer>
        {children}
    </StyledDataContainer>
);

export default DataContainer;