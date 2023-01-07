1. Keys are unique attributes with which React identifies the elements in the DOM.
2. Using keys, React identifies the elements that have been changed, moved, added or deleted. 
3. Generally, using index of the map() function as keys could be an obvious solution, but it creates some confusion.
4. If there is a change in the list, React gets confused as to which property is to be used for which item and there is a collapse in the data.
5. Hence, it is optimal to use 'id' or any other relevant value as key.