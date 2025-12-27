import * as fs from "fs";
import { NodeType, TokenType } from "./definitions"
import type { ObjectNode, JsonNode } from "./definitions"

const filePath = process.argv[2];
const content = readFile(filePath);

function readFile(path: string): string {
	try {
		const data = fs.readFileSync(path, "utf-8");
		return data;
	} catch (err) {
		throw new Error(`Failed to read: ${path}`)
	}
}

if (filePath == null) {
	console.error("provide args");
	process.exit(1);
}

// console.log(content); // debug


// tests

const nullNode: JsonNode = {
	type: NodeType.NULL
};

const arrayNode: JsonNode = {
	type: NodeType.ARRAY,
	elements: [
		{type: NodeType.NULL}
	]
}

const objectNode: JsonNode = {
	type: NodeType.OBJECT,
	properties: new Map<string, JsonNode>([
		['null', nullNode],
		['array', arrayNode],
	]),
}

console.log(nullNode);
console.log(arrayNode);
console.log(objectNode);

