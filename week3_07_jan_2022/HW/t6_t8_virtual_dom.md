1. Virtual DOM is a programming concept. Not something particular to React.
2. It means that the DOM is stored in-memory (this in-memory DOM is called virtual DOM) and if there are any changes, this in-memory DOM gets modified first and the sync up with the actual DOM happens later, based on these changes.
3. This process is called reconciliation.
4. In addition, React uses internal objects named fiber to hold details about additional properties of the React components; they can also be associated with React's virtual DOM.
5. React Fiber is a new implementation of the diffing algorithm that will sync up the changes with actual DOM in chunks so that the time taken is lessened.