import styled from 'styled-components';

const RepoLinkStyled = styled.a`
    color: #fff;
    width: 80px;
    padding: 4px;
    font-size: 12px;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
    background-color: #e91e63;
    margin-right: 10px;
`;

const RepoLink = ({ username, repoName }) => (
    <RepoLinkStyled href={`https://github.com/${username}/${repoName}`} target="_blank" rel="noopener noreferrer">Visit</RepoLinkStyled>
);

export default RepoLink;