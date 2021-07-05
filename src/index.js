import antlr4 from 'antlr4';
import TaskLexer from './antlr4/TaskLexer.js';
import TaskParser from './antlr4/TaskParser.js';
import { CustomTaskVisitor } from './Controllers/customVisitor.js';

var input = "- task foo\n[] task bar";

const chars = new antlr4.InputStream(input);
const lexer = new TaskLexer(chars);

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new TaskParser(tokens);
parser.buildParseTrees = true;
const tree = parser.elements();

var resu = tree.accept(new CustomTaskVisitor());

console.log(parser.ruleNames);