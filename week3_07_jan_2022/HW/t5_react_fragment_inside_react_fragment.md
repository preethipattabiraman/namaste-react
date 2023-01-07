1. Generally, a functional component or a React element should have a PARENT element. Meaning, the component should be returning a single element; not siblings.
2. So, it is quite logical to insert a dummy <div></div> so that this issue does not crop. But this collapses the DOM and makes the structure a bit clumsy.
3. In order to return a single element, React.Fragment is used.
4. React.Fragment is an empty element that helps in creating multiple elements without the creation of an unnecessary DOM element.
5. A React.Fragment inside another fragment does not create any extra tags.
6. shortcut of React.Fragment is <></>