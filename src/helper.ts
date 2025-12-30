import type { Token } from "./definitions"
import { TokenType } from "./definitions"

export function printToken({ type, value, position }: Token) {
	console.log(
		`${type.padEnd(10)}|` +
		`${String(value).padEnd(10)}|` +
		`${position}`);
}

export function printTokens(tokenArr: Token[]) {
	console.log(
		`${"Type".padEnd(10)}|` +
		`${"Value".padEnd(10)}|` +
		`${"Position"}`);
	console.log("-------------------------------");
	for (const token of tokenArr) {
		printToken(token);
	}
}
