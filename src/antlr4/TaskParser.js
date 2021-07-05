// Generated from src/antlr4/Task.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TaskVisitor from './TaskVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\n\"\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0007\u0002\u000b\n\u0002\f\u0002\u000e",
    "\u0002\u000e\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0007\u0003\u0014\n\u0003\f\u0003\u000e\u0003\u0017\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003\u001b\n\u0003\f\u0003\u000e\u0003\u001e",
    "\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002",
    "\u0004\u0006\u0002\u0003\u0003\u0002\u0003\u0004\u0002\"\u0002\f\u0003",
    "\u0002\u0002\u0002\u0004\u0011\u0003\u0002\u0002\u0002\u0006\u001f\u0003",
    "\u0002\u0002\u0002\b\u000b\u0005\u0004\u0003\u0002\t\u000b\u0005\u0006",
    "\u0004\u0002\n\b\u0003\u0002\u0002\u0002\n\t\u0003\u0002\u0002\u0002",
    "\u000b\u000e\u0003\u0002\u0002\u0002\f\n\u0003\u0002\u0002\u0002\f\r",
    "\u0003\u0002\u0002\u0002\r\u000f\u0003\u0002\u0002\u0002\u000e\f\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u0007\u0002\u0002\u0003\u0010\u0003\u0003",
    "\u0002\u0002\u0002\u0011\u0015\u0007\u0007\u0002\u0002\u0012\u0014\t",
    "\u0002\u0002\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0017\u0003",
    "\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003",
    "\u0002\u0002\u0002\u0016\u0018\u0003\u0002\u0002\u0002\u0017\u0015\u0003",
    "\u0002\u0002\u0002\u0018\u001c\u0007\u0006\u0002\u0002\u0019\u001b\u0007",
    "\u0005\u0002\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u001e\u0003",
    "\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003",
    "\u0002\u0002\u0002\u001d\u0005\u0003\u0002\u0002\u0002\u001e\u001c\u0003",
    "\u0002\u0002\u0002\u001f \u0007\u0005\u0002\u0002 \u0007\u0003\u0002",
    "\u0002\u0002\u0006\n\f\u0015\u001c"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class TaskParser extends antlr4.Parser {

    static grammarFileName = "Task.g4";
    static literalNames = [ null, "' '", "'\t'", null, null, null, "'-'" ];
    static symbolicNames = [ null, null, null, "NL", "CONTENT", "START", 
                             "DASH", "CHECKBOX", "MARKEDBOX" ];
    static ruleNames = [ "elements", "task", "emptyLine" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TaskParser.ruleNames;
        this.literalNames = TaskParser.literalNames;
        this.symbolicNames = TaskParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	elements() {
	    let localctx = new ElementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TaskParser.RULE_elements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TaskParser.NL || _la===TaskParser.START) {
	            this.state = 8;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case TaskParser.START:
	                this.state = 6;
	                this.task();
	                break;
	            case TaskParser.NL:
	                this.state = 7;
	                this.emptyLine();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 12;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 13;
	        this.match(TaskParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	task() {
	    let localctx = new TaskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TaskParser.RULE_task);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.match(TaskParser.START);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TaskParser.T__0 || _la===TaskParser.T__1) {
	            this.state = 16;
	            _la = this._input.LA(1);
	            if(!(_la===TaskParser.T__0 || _la===TaskParser.T__1)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(TaskParser.CONTENT);
	        this.state = 26;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 23;
	                this.match(TaskParser.NL); 
	            }
	            this.state = 28;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emptyLine() {
	    let localctx = new EmptyLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TaskParser.RULE_emptyLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(TaskParser.NL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TaskParser.EOF = antlr4.Token.EOF;
TaskParser.T__0 = 1;
TaskParser.T__1 = 2;
TaskParser.NL = 3;
TaskParser.CONTENT = 4;
TaskParser.START = 5;
TaskParser.DASH = 6;
TaskParser.CHECKBOX = 7;
TaskParser.MARKEDBOX = 8;

TaskParser.RULE_elements = 0;
TaskParser.RULE_task = 1;
TaskParser.RULE_emptyLine = 2;

class ElementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskParser.RULE_elements;
    }

	EOF() {
	    return this.getToken(TaskParser.EOF, 0);
	};

	task = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TaskContext);
	    } else {
	        return this.getTypedRuleContext(TaskContext,i);
	    }
	};

	emptyLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmptyLineContext);
	    } else {
	        return this.getTypedRuleContext(EmptyLineContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TaskVisitor ) {
	        return visitor.visitElements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TaskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskParser.RULE_task;
    }

	START() {
	    return this.getToken(TaskParser.START, 0);
	};

	CONTENT() {
	    return this.getToken(TaskParser.CONTENT, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskParser.NL);
	    } else {
	        return this.getToken(TaskParser.NL, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof TaskVisitor ) {
	        return visitor.visitTask(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmptyLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskParser.RULE_emptyLine;
    }

	NL() {
	    return this.getToken(TaskParser.NL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TaskVisitor ) {
	        return visitor.visitEmptyLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TaskParser.ElementsContext = ElementsContext; 
TaskParser.TaskContext = TaskContext; 
TaskParser.EmptyLineContext = EmptyLineContext; 
