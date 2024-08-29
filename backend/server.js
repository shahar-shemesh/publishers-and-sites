import express from "express";
import cors from "cors";
import fs from "fs";
import publishersRouter from "./routers/publishers.js";
import domainsRouter from "./routers/domains.js";
import path from "path";

const PORT = 4300;
const app = express();

const dbPath = path.basename('./db.json');


const loadData = () => {
    try {
        const data = fs.readFileSync(dbPath, "utf8");
        publishers = JSON.parse(data);
    } catch (error) {
        console.error("Failed to load data from db", error);
    }
};

const saveData = () => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(publishers));
    } catch (error) {
        console.error("Failed to save data to db", error);
    }
};

let publishers = [];
loadData();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/publishers", publishersRouter);
app.use("/api/domains", domainsRouter);

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));

export { publishers, saveData };
