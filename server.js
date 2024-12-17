const express = require("express");
const path = require("path");

const app = express();

const appPath = path.join(__dirname, "project_1/browser");
app.use(express.static(appPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(appPath, "index.html"));

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
