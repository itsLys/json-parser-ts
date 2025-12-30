// export enum TokenType {
// 	LBRACE,
// 	RBRACE,
// 	LBRACKET,
// 	RBRACKET,
// 	COLON,
// 	COMMA,
//
// 	STRING,
// 	NUMBER,
// 	TRUE,
// 	FALSE,
// 	NULL,
//
// 	EOF
// }
//
// export enum NodeType {
// 	OBJECT,
// 	ARRAY,
// 	STRING,
// 	NUMBER,
// 	BOOLEAN,
// 	NULL
// }
// NOTE: Use string enums for now (debugging)

export enum TokenType {
	LBRACE = "LBRACE",
	RBRACE = "RBRACE",
	LBRACKET = "LBRACKET",
	RBRACKET = "RBRACKET",
	COLON = "COLON",
	COMMA = "COMMA",
	STRING = "STRING",
	NUMBER = "NUMBER",
	TRUE = "TRUE",
	FALSE = "FALSE",
	NULL = "NULL",
	EOF = "EOF"
}

export enum NodeType {
	OBJECT = "OBJECT",
	ARRAY = "ARRAY",
	STRING = "STRING",
	NUMBER = "NUMBER",
	BOOLEAN = "BOOLEAN",
	NULL = "NULL"
}

export interface Token {
	type: TokenType;
	value: string | undefined;
	position: number;
}

export type JsonNode =
	| ObjectNode
	| ArrayNode
	| StringNode
	| NumberNode
	| BooleanNode
	| NullNode;

export interface BaseNode {
	type: NodeType;
}

export interface ObjectNode extends BaseNode {
	type: NodeType.OBJECT;
	properties: Map<string, JsonNode>;
}

export interface ArrayNode extends BaseNode {
	type: NodeType.ARRAY;
	elements: JsonNode[];
}

export interface StringNode extends BaseNode {
	type: NodeType.STRING;
	value: string;
}

export interface NumberNode extends BaseNode {
	type: NodeType.NUMBER;
	value: number;
}

export interface BooleanNode extends BaseNode {
	type: NodeType.BOOLEAN;
	value: boolean;
}

export interface NullNode extends BaseNode {
	type: NodeType.NULL;
}
