import antlr4 from 'antlr4';
import TaskLexer from './antlr4/TaskLexer.js';
import TaskParser from './antlr4/TaskParser.js';

var input = '* task foo';

const chars = new antlr4.InputStream(input);
const lexer = new TaskLexer(chars);

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new TaskParser(tokens);
parser.buildParseTrees = true;
const tree = parser.foo();
console.log();