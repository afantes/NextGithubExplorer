import styled from 'styled-components';

const ErrorMessage = styled.span`
    color: #888;
    font-size: 18px;
`;

const Error = ({ message }) => {
    return <ErrorMessage>{message}</ErrorMessage>;
}

export default Error;