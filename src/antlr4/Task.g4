grammar Task;

elements
    : (task|emptyLine)* EOF
    ;

task
    : START ( ' ' | '\t' )* CONTENT NL*
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

START
    : DASH
    | CHECKBOX
    | MARKEDBOX
    ;

DASH
    : '-';

CHECKBOX
    : '[]'
    | '[ ]'
    ;
    
MARKEDBOX
    : '[x]'
    | '[X]'
    ;