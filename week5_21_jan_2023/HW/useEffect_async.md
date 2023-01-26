1. useEffect takes two parameters - callback function and dependency array.
2. Callback function should either return nothing or a function to clean up anything that might leave anything in the memory (cleanup function)
3. Async() callback will return a promise and not a function. Hence this is not recommended.
4. Alternate - to use Suspense