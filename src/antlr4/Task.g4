grammar Task;

foo
    : (element|emptyLine)* EOF
    ;

element
    : '*' ( ' ' | '\t' )* CONTENT NL+
    ;

emptyLine
    : NL
    ;

NL
    : '\r' | '\n' 
    ;

CONTENT
    : [a-zA-Z0-9_][a-zA-Z0-9_ \t]*
    ;