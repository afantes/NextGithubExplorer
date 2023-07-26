import RepoName from '@/components/RepoName/RepoName';
import RepoLink from '@/components/RepoLink/RepoLink';
import RepoStars from '@/components/RepoStars/RepoStars';

const RepoDetails = ({ username, repo }) => {
    return (
        <>
            <RepoName name={repo.name} />
            <RepoLink username={username} repoName={repo.name} />
            <RepoStars stars={repo.stargazers_count} />
        </>
    );
}

export default RepoDetails;