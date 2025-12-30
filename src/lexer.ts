import { TokenType } from "./definitions"
import type { Token } from "./definitions"

const token: Token = {
	type: TokenType.NULL,
	value: "Hello",
	position: 0
}

export function lex(content: string) : Token[] {

	console.log(content);
	let t: Token[] = [];
	t.push(token)
	return t;
}

// str API
