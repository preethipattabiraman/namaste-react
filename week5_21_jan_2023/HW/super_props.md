### Why super(props) is needed in the Class Component?
1. super(props) helps in the usage of this keyword. If the parent is not assigned the props, props becomes undefined in the parent and this caused bugs.
2. If there are no state variables or functions, this is not needed. 