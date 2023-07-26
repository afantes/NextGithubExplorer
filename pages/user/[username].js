import Container from '@/components/Container/Container';
import DataContainer from '@/components/DataContainer/DataContainer';
import Error from '@/components/Error/Error';
import RepoBox from '@/components/RepoBox/RepoBox';

const UserPage = ({ repositories, error }) => {
    return (
        <Container>
            <DataContainer>
                <br />
                {error ? <Error message={error} /> :
                    Array.isArray(repositories) && repositories.map((repo) => (
                        <RepoBox
                            key={repo.id}
                            username={repo.owner.login}
                            repo={repo}
                        />
                    ))
                }
            </DataContainer>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const { username } = context.params;

    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();
        return { props: { repositories: data } }
    } catch (error) {
        return { props: { error: "An error occurred. Please try again." } }
    }
}

export default UserPage;