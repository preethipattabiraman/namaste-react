1. Reconciliation is the name of the process done by React to render the DOM nodes once there is a mutation. 
    + It means to sync up with the DOM in-memory (virtual) representation of the UI with the actual DOM.
2. This is done by using the Diffing algorithm.
3. Basically React tries to reduce the number of operations done to the DOM to render these changes. 
4. It assumes that 
    + different root elements will produce different trees
    + developers will indicate the stable elements using the key attribute
5. Insertion in the start of a tree with children has the worst time complexity and React may need to tear down the entire tree to rebuild the structure.
6. In such cases, usage of keys will help React to identify the keys that are present in older and newer versions and render only the children with newer keys to the DOM, thereby reducing the time taken for insertion.
7. If any one of the properties are modified, React knows to update only those properties and keys are not mandatorily needed for this.
8. If all the children in the DOM  are going to be different elements, keys are not needed, since React knows they are all different and can uniquely identify the elements.