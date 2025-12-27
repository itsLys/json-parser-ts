export enum TokenType {
	LBRACE,
	RBRACE,
	LBRACKET,
	RBRACKET,
	COLON,
	COMMA,

	STRING,
	NUMBER,
	TRUE,
	FALSE,
	NULL,

	EOF
}

export enum NodeType {
	OBJECT,
	ARRAY,
	STRING,
	NUMBER,
	BOOLEAN,
	NULL
}

export interface Token {
	type: TokenType;
	value: string | undefined;
	position: number;
}

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

export type JsonNode =
	| ObjectNode
	| ArrayNode
	| StringNode
	| NumberNode
	| BooleanNode
	| NullNode;
