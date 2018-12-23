## js-objects

0.0.4

Methods for working with data structures and functions.  ht `_`; - *mostly* immutable and stateless.

### API Documentation

---
`arrayToObject`

Array to Object


```
__.arrayToObject(['a', 'b', 'c']);

// returns
// {
//    0: 'a',
//    1: 'b',
//    2: 'c'
// }

```


--- 
`arraysToObject`

Arrays to Object


```

__.arraysToObject(['a', 'b', 'c'], [1, 2, 3]);

// returns
// {
//   1: 'a',
//   2: 'b',
//   3: 'c'
// }

```

---
`assignMethodsToObject`

Assign methods to object


```
__.assignMethodsToObject([method1, method2], {});


// returns
// {
//    method1: fn,
//    method2: fn
// }


```

---
`chainMethods`

Chain Methods.  This function allows chaining of disparate methods that don't necessarily belong to the same class or that don't return the correct context, or that return an additional value that the next method needs as a parameter.


```

// `thisMethod` needs `thatMethod`

var thisMethod = (arg1, arg2, thatMethodResponse) =>  arg1 + arg2 + thatMethodResponse;

var thatMethod = (arg1, arg2) => arg1 + arg2;

__.chainMethods({
	functions: [thatMethod, thisMethod],
	args: [arg1, arg2],
	scope: this
})
```

---
`cloneObject`


Clones an object


```

__.cloneObject({});

// returns `{}`;

```


---
`doKeysMatchs`

Accepts an array of two objects;


```

__.doKeysMatch([{key: 'a'}, {key: 'b'}]);

// returns true

```

---

`extendAllMethodsInObject`

Extend all methods in a class.  These `extend` functions use an `express`-style middleware pattern to add functionality to existing methods.   Essentially, an objects functions are called, followed by whichever middleware has been provided.  


```
var obj = {
	fn1: () => {},
	fn2: () => {}
};

__.extend({obj, [fn3, fn4]);

obj.fn1()
// runs fn1, fn3, and fn4,
// although the order should probably be
// fn3, fn4, fn1

```


---

`extendAllMethods`

Extend all methods.  This function works similarly to `extendAllMethodsInObject`, except that it extends methods in a prototypal class.   This status of this function is currently pending.


```

var updatedClass = __.extendAllMethods(oldClass, [middlewareFn1, middlewareFn2]])

var aClassWithMiddleware = new updatedClass();

aClassWithMiddleware.method();

// runs the original oldClass.method, middlewareFn1 and middlewareFn2

```

---

`extendMethod`

Extend a single method with middleware.

```

var fn = () => {};
var middlewareFN = () => {};

var extendedFn = __.extendMethod(fn, middlewareFn);


```


---
`findIn`

Unoptimized needle-finder for arrays.

```
var haystack = ['a','b', 'c'];

__.findIn('b', haystack);

```

---
`inherit`

Implement the functionality of oo-style `inheritance`.  

```

var ParentClass = function () {};
ParentClass.prototype.method = () => {}
var ChildClass = function () {}

var InheritedChild = __.inherit(ParentClass, ChildClass);

var inherited = new InheritedChild();

inherited.method();

```

---
`isArrayTrue`

Occasionally sorting values into arrays of booleans requires a filter to determine if an array contains only `true` values.

```

__.isArrayTrue([false, true, true]);

```

---
`mapArguments`

Map arguments into a regular array.  Similar functionality and the same result as `Array.prototype.splice.call(arguments);`

```

function example() {
	return mapArguments(arguments);
}

var array = example('a', 'b');
console.log(array);
// returns ['a', 'b']

```


---
`mapMethods`

?

```
__.mapMethods({
	args: [],
	fn: [] 
})
```


---

`mapObject`

Map Object - similar to `Array`'s prototypal `map` functionality, `mapObject` accepts an object and a function, and loops thrugh the properties of the object, using them as parameters in the provided function.

```
var mappedData = __.mapObject({

		data: [],
		$el: document.getElementById('section')

	}, (value, key, object) => key + ": " + typeof $el);

console.log(mappedData);
// returns ["data: object", "$el: object"]


```

---
`mapToObject`

Return an object instead of an array.

```

var obj = __.mapToObject(['a', 'b', 'c'], (value, index) => value + " " + index)

console.log(obj);
// returns
// {
//     a0: "a0",
//	   b1: "b1",
//     c2: "c2"
// }

```

---
`mapValues`

Map values.  Possibly misnamed.

```

var obj = __.mapValues(['a', 'b', 'c'], [1, 2, 3]);
console.log(obj);
// returns
// {
//   1: "a",
//   2: "b",
//   ...
// }

```

---
`objectToArray`

Maps an object's attribute value to an array

```

var arr = {1: "a", 2: "b", 3: "c"};
console.log(arr);
// ["a", "b", "c"]

```

---
`removeBlankArrays`

Remove blank arrays

```
var arr = __.removeBlankArrays([[], ['data'], []]);
console.log(arr);
// [['data']]

```

---
`removeUndefined`

Remove undefined variables in an array. An alias for [].filter((value) => value === undefined ? false : true);

```
var arr = __.removeUndefined([['value'], undefined])
console.log(arr);
// [['value']]
```

---
`runFunctions`

Sequence functions.  Return values do not interact. For cascading return values, see `chainMethods`.

```

__.runFunctions({
	fn: [() => {}, fn2],
	args: ['arg1', 'arg2']
})


```

---
`updateObjectProperties`

Update object properties with a `mutator`.


```

var originalObject = {
	data : 'src',
	$el : elementNode
}

var updateobject = {
	data : 'alt'
}

__.updateObjectProperties(originalObject, updateObject);

console.log(originalObject);

// return
// {
//   data: 'alt',
//   $el: elementNode
// }

``` 

---
`doesObjectOwnProperties`

Verify that the properties of an object belong to the current object. 

```

var newObj = Object.assign({});

console.log(!__.validateAllProperties(newObj) ? 'this object contains inherited properties ' : 'this is a new object');


```

---
`validateMethods`

Ensure that methods belonging to an object are match an 'interface-like' array of functions.  

```

var methods = [fn1, fn2]

var Library = function () {

}

Library.prototype.fn1 = () => {}
Library.prototype.fn2 = () => {}

var Museum = function () {

}

Museum.prototype.fn1 = () => {}
Museum.prototype.fn2 = () => {}

  
__.validateMethods(Library, methods)
__.validateMethods(Museum, methods)



```


---
`verifyPropertiesExist`

Verify properties exist.

```

var objectKeys = ['data', '$el'];

var obj = {
	data: [],
	$el: document.getElementById('section')
}

console.log(__.verifyPropertiesExist(obj, objectKeys));
// returns true


```

---
`walkObject`

Walk an object and run a function at each attribute without mapping

```
var obj = {
	a: "a",
	b: "b",
	c: "c"
}

var fn = (value) => console.log (value)

__.walkObject(obj, fn);

// returns
// a
// b
// c

```

