import styled from 'styled-components';

const RepoStarsStyled = styled.span`
    color: #fff;
    width: 80px;
    padding: 4px;
    font-size: 12px;
    text-align: center;
    border-radius: 4px;
    background-color: #009688;
`;

const RepoStars = ({ stars }) => <RepoStarsStyled>Stars: {stars}</RepoStarsStyled>;

export default RepoStars;