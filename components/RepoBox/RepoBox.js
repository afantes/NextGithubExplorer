import styled from 'styled-components';
import RepoDetails from '@/components/RepoDetails/RepoDetails';

const RepoContainer = styled.div`
    background-color: #f5f5f5;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
`;

const RepoBox = ({ username, repo }) => {
    return (
        <RepoContainer>
            <RepoDetails
                username={username}
                repo={repo}
            />
        </RepoContainer>
    );
}

export default RepoBox;