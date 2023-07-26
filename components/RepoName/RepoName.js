import styled from 'styled-components';

const RepoNameStyled = styled.p`
    flex: 1;
    text-align: left;
`;

const RepoName = ({ name }) => <RepoNameStyled>{name}</RepoNameStyled>;

export default RepoName;