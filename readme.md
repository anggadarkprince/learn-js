#### Javascript File Exercise
This is my playground to learn and try of Javascript new feature, you free to clone or fork for learning purpose.

#### Javascript code convention

1.  Do not use global variable to prevent collision variable with library or your code,
    instead use namespace to declare variable com_sketchproject = {}; com_sketchproject.name = 'angga';
2.  Always use semicolon for statement.
3.  Prefer camelcase naming convention.
4.  Declare variable of function before it's called.
5.  Avoid a language construct such as: eval(), new Function('string_function_code').
6.  Use built-in function whenever possible, they implement in native code in the browser.
7.  REMEMBER:
    (Pass by value) Primitive values like numbers are passed to functions
    as a distinct copy of themselves. Changing them has no effect.
    ({ass by reference) Object and arrays, however are passed by reference.
    if you change their contents inside a function, that change does have and effect.
8.  Don't pass string function code to setInterval() and setTimeout() instead use anonymous or declared function.
9.  Use += operator concat string instead + string + string + string.
10. Use innerHTML instead of using the dom node such as appendChild, insertBefore, nodeValue.
11. Avoid making large-scale DOM change one at a time. Instead, make changes to a temporary
    object, modify that then copy the result back into the document (to avoid big reparse/reflow document).
12. It's good practice to separate js from presentation (html)
13. No inline event attributes such href="javascript:function()"
