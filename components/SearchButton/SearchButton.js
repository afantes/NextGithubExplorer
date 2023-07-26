import styled from 'styled-components';

const Button = styled.button`
    padding: 12px 0;
    margin: 10px auto;
    width: 40%;
    display: flex;
    justify-content: center;
    background-color: #ff6b6b;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e64c4c;
    }
`;

const SearchButton = ({ fetchGitHubRepos }) => {
    return (
        <Button onClick={fetchGitHubRepos}>Get Repos</Button>
    );
}

export default SearchButton;