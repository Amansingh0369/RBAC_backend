const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/user", (req, res) => {
    res.json({
        post:"234",
        video:"56",
        active:"89%"
    });
});

app.get("/editor", (req, res) => {
    res.json({
        content:"15",
    });
});
app.get("/Admin", (req, res) => {
    res.json({
        active:"125",
    });
});

const PORT =  4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
