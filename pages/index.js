import { useState } from 'react';
import Container from '@/components/Container/Container';
import SearchBar from '@/components/SearchBar/SearchBar';
import DataContainer from '@/components/DataContainer/DataContainer';
import Error from '@/components/Error/Error';
import RepoBox from '@/components/RepoBox/RepoBox';

const Home = () => {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGitHubRepos = async () => {
    setRepositories(null);
    setError(null);
    setLoading(true);
    if (username === "") {
      setError("Please enter a GitHub username.");
      setLoading(false);
    } else {
      try {
        const response = await fetch(`/api/repos?username=${username}`);
        if (response.ok) {
          const data = await response.json();
          if (data.length === 0) {
            setError("No repositories found.");
          } else {
            setRepositories(data);
          }
        }
        else {
          const errorData = await response.json();
          console.log(errorData);
          setError(errorData.error);
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <SearchBar
        username={username}
        setUsername={setUsername}
        fetchGitHubRepos={fetchGitHubRepos}
      />
      <DataContainer>
        {error ? <Error message={error} /> :
          loading ? <Error message=". . ." /> :
            Array.isArray(repositories) && repositories.map((repo) => (
              <RepoBox
                key={repo.id}
                username={username}
                repo={repo}
              />
            ))
        }
      </DataContainer>
    </Container>
  );
};

export default Home;