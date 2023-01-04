1. async and defer are two ways to load external scripts into the HTML in an efficient manner
1.  Generally in the two phases of HTML page loading: HTML parsing and Loading of the script - Async and Defer ensures that HTML page parsing does not wait for the scripts
1.  Async : Loads the scripts in parallel -> HTML parsing waits for JS execution -> Parsing continues once JS executions complete
1.  Async does not ensure the order of the JS execution. Can cause errors.
1.  Defer : Loads the scripts in parallel -> Waits for the HTML parsing to complete -> Excecutes the JS code
1.  Defer ensures the order of the JS excecution
1.  Prefer defer! 