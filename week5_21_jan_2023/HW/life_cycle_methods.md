1. A class component has to implement two methods mainly - constructor and the render method.
2. By default there are two phases of the three main actions done - mount, update and unmount.
3. The class is initialized in the constructor, rendered in the render() method.
4. After which the componentDidMount method is called.
5. If there is a state change, based on the new state variables, the DOM update and re-render happens during which componentDidUpdate() and render() is called.
6. When a component is unmounted, componentDidUnmount() is called.