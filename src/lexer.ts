import { TokenType } from "./definitions"
import type { Token } from "./definitions"

const token: Token = {
	type: TokenType.NULL,
	value: "Hello",
	position: 0
}

// private line: number = 1, TODO: implement for err printing
// private column: number = 0,
class Lexer {
	private index: number = 0;
	private currChar: string = this.input[0];
	constructor(
		private input: string,
	) { }

	nextToken() {}
	private advance() {
		this.index++;
		this.currChar = this.input[this.index];
	}

	private peek() {
		return this.input[this.index + 1];
	}

	private skipWhitespace(): void {
		let ch = this.currChar;
		while (ch === ' ' || ch === '\n' || ch === '\t' || ch === '\r') {
			this.advance();
			ch = this.currChar;
		}
	}

	private readString() { }
	private readNumber() { }
	private readKeyword() { }


	// private error(msg: string) : void { }
}

export function lex(content: string): Token[] {
	const lexer: Lexer = new Lexer(content);
	console.log(content);
	let t: Token[] = [];
	t.push(token)
	return t;
}

// str API


