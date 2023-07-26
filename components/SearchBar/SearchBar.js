import styled from 'styled-components';
import InputField from '@/components/InputField/InputField';
import SearchButton from '@/components/SearchButton/SearchButton';

const InputContainer = styled.div`
    margin: auto;
    padding: 30px;
`;

const SearchBar = ({ username, setUsername, fetchGitHubRepos }) => {
    return (
        <InputContainer>
            <InputField
                username={username}
                setUsername={setUsername}
            />
            <SearchButton fetchGitHubRepos={fetchGitHubRepos} />
        </InputContainer>
    );
}

export default SearchBar;