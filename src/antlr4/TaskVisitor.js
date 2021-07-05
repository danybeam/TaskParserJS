// Generated from src/antlr4/Task.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by TaskParser.

export default class TaskVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by TaskParser#elements.
	visitElements(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by TaskParser#task.
	visitTask(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by TaskParser#emptyLine.
	visitEmptyLine(ctx) {
	  return this.visitChildren(ctx);
	}



}