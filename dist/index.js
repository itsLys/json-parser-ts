"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function readFile(path) {
    try {
        const data = fs.readFileSync(path, "utf-8");
        return data;
    }
    catch (err) {
        console.error(`Failed to read: ${path}`);
        return null;
    }
}
const filePath = process.argv[2];
if (filePath == null) {
    console.error("provide args");
    process.exit(1);
}
const content = readFile(filePath);
console.log(content);
