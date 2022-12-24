# async and defer are two ways to load external scripts into the HTML in an efficient manner
# Generally in the two phases of HTML page loading: HTML parsing and Loading of the script - Async and Defer ensures that HTML page parsing does not wait for the scripts
# Async : Loads the scripts in parallel -> HTML parsing waits for JS execution -> Parsing continues once JS executions complete
# Async does not ensure the order of the JS execution. Can cause errors.
# Defer : Loads the scripts in parallel -> Waits for the HTML parsing to complete -> Excecutes the JS code
# Defer ensures the order of the JS excecution
# Prefer defer! 