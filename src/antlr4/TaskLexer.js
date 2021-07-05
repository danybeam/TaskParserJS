// Generated from src/antlr4/Task.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\n6\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0007\u0005\u001c",
    "\n\u0005\f\u0005\u000e\u0005\u001f\u000b\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006$\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b-\n\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\t5\n\t\u0002\u0002\n\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0003\u0002\u0005",
    "\u0004\u0002\f\f\u000f\u000f\u0006\u00022;C\\aac|\b\u0002\u000b\u000b",
    "\"\"2;C\\aac|\u0002:\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0003\u0013\u0003\u0002\u0002\u0002\u0005\u0015",
    "\u0003\u0002\u0002\u0002\u0007\u0017\u0003\u0002\u0002\u0002\t\u0019",
    "\u0003\u0002\u0002\u0002\u000b#\u0003\u0002\u0002\u0002\r%\u0003\u0002",
    "\u0002\u0002\u000f,\u0003\u0002\u0002\u0002\u00114\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u0007\"\u0002\u0002\u0014\u0004\u0003\u0002\u0002",
    "\u0002\u0015\u0016\u0007\u000b\u0002\u0002\u0016\u0006\u0003\u0002\u0002",
    "\u0002\u0017\u0018\t\u0002\u0002\u0002\u0018\b\u0003\u0002\u0002\u0002",
    "\u0019\u001d\t\u0003\u0002\u0002\u001a\u001c\t\u0004\u0002\u0002\u001b",
    "\u001a\u0003\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d",
    "\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e",
    "\n\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002 $\u0005",
    "\r\u0007\u0002!$\u0005\u000f\b\u0002\"$\u0005\u0011\t\u0002# \u0003",
    "\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#\"\u0003\u0002\u0002\u0002",
    "$\f\u0003\u0002\u0002\u0002%&\u0007/\u0002\u0002&\u000e\u0003\u0002",
    "\u0002\u0002\'(\u0007]\u0002\u0002(-\u0007_\u0002\u0002)*\u0007]\u0002",
    "\u0002*+\u0007\"\u0002\u0002+-\u0007_\u0002\u0002,\'\u0003\u0002\u0002",
    "\u0002,)\u0003\u0002\u0002\u0002-\u0010\u0003\u0002\u0002\u0002./\u0007",
    "]\u0002\u0002/0\u0007z\u0002\u000205\u0007_\u0002\u000212\u0007]\u0002",
    "\u000223\u0007Z\u0002\u000235\u0007_\u0002\u00024.\u0003\u0002\u0002",
    "\u000241\u0003\u0002\u0002\u00025\u0012\u0003\u0002\u0002\u0002\u0007",
    "\u0002\u001d#,4\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class TaskLexer extends antlr4.Lexer {

    static grammarFileName = "Task.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "' '", "'\t'", null, null, null, "'-'" ];
	static symbolicNames = [ null, null, null, "NL", "CONTENT", "START", "DASH", 
                          "CHECKBOX", "MARKEDBOX" ];
	static ruleNames = [ "T__0", "T__1", "NL", "CONTENT", "START", "DASH", 
                      "CHECKBOX", "MARKEDBOX" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

TaskLexer.EOF = antlr4.Token.EOF;
TaskLexer.T__0 = 1;
TaskLexer.T__1 = 2;
TaskLexer.NL = 3;
TaskLexer.CONTENT = 4;
TaskLexer.START = 5;
TaskLexer.DASH = 6;
TaskLexer.CHECKBOX = 7;
TaskLexer.MARKEDBOX = 8;



