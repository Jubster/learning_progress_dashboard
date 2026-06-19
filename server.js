const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('app'));

app.get("/api/feedback", (req, res) => {
    res.send("Project progress is on track. Continue refining documentation, testing completed functionality thoroughly, and resolving any outstanding issues before release.");
});

app.get("/api/q-and-a", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify([
        {
            "id": 1,
            "question": "How can I track project progress?",
            "answer": "Project progress can be monitored through the dashboard overview and project status cards."
        },
        {
            "id": 2,
            "question": "Can project information be updated?",
            "answer": "Yes, project data can be updated as development progresses."
        },
        {
            "id": 3,
            "question": "Where can I find project documentation?",
            "answer": "Documentation and supporting resources are available within the project workspace."
        }
    ]));
});

app.listen(port, () => {
    console.log(`Learning Progress Dashboard available on port ${port}`);
});
