import * as fs from "fs";
import { NodeType, TokenType } from "./definitions"
import type { ObjectNode, JsonNode, Token} from "./definitions"
import { printToken, printTokens} from "./helper"


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

const token: Token = {
	type: TokenType.NULL,
	value: "Hello",
	position: 0
}

const token1: Token = {
	type: TokenType.RBRACE,
	value: undefined,
	position: 20
}

let tokenArr: Token[] = [];
tokenArr.push(token, token1);

printTokens(tokenArr);
