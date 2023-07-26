export default async function handler(req, res) {
    const { username } = req.query;

    if (!username) {
        return res.status(400).json({ error: "Please enter a GitHub username." });
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();

        if (data.length === 0) {
            return res.status(404).json({ error: "No repositories found." });
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred. Please try again." });
    }
}