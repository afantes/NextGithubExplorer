import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #ff6b6b;
    }
`;

const InputField = ({ username, setUsername }) => {
    return (
        <Input
            type="text"
            placeholder="Github Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
        />
    );
}

export default InputField;