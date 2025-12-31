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

	nextToken(): Token {
		this.skipWhitespace();

		const ch: string = this.currChar;
		const pos = this.index;

		if (ch === 't' || ch === 'f' || ch === 'n') {
			const value = this.readKeyword();
			return {
				type:
					value === null ? TokenType.NULL :
						value === true ? TokenType.TRUE :
							TokenType.FALSE,
				value: undefined,
				position: pos,
			}
		}
		return token;
	}

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

	private readString() {
		// "Hello World"
		let str: string = "";
		this.advance();
		while (true) {
			let char: string = this.currChar;
			if (char === '"' || !char)
				break;
			str += char;
			this.advance();
		}
		this.advance();
		return str;
	}

	private readNumber() {
		return 1;
	}

	private readKeyword(): boolean | null {
		if (this.input.startsWith("true", this.index)) {
			this.index += 4;
			return true;
		}

		if (this.input.startsWith("false", this.index)) {
			this.index += 5;
			return false;
		}

		if (this.input.startsWith("null", this.index)) {
			this.index += 4;
			return null;
		}
		return false;
		// err
	}

} // null, false, true

	// private error(msg: string) : void { }


export function lex(content: string): Token[] {
	const lexer: Lexer = new Lexer(content);
	let t: Token[] = [];
	t.push(lexer.nextToken())
	return t;
}

// str API
