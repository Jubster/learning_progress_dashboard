const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('app'));

app.get("/api/feedback", (req, res) => {
    res.send("Good progress. Consider improving documentation and testing before final submission.");
});

app.get("/api/q-and-a", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify([
        {
            "id": 1,
            "question": "How do I submit my project?",
            "answer": "Use the submission portal before the deadline."
        },
        {
            "id": 2,
            "question": "Can I update my submission?",
            "answer": "Yes, until the submission deadline has passed."
        },
        {
            "id": 3,
            "question": "Where can I find project resources?",
            "answer": "Resources are available from the course materials section."
        }
    ]));
});

app.listen(port, () => {
    console.log(`Learning Progress Dashboard available on port ${port}`);
});