# clscompose syntax guide

A utility for constructing className strings conditionally.

## Example

```js
import clscompose from "clscompose";
// Strings (variadic)
clscompose("foo", true && "bar", "baz");
//=> 'foo bar baz'

// Objects
clscompose({ foo: true, bar: false, baz: isTrue() });
//=> 'foo baz'

// Objects (variadic)
clscompose({ foo: true }, { bar: false }, null, { "--foobar": "hello" });
//=> 'foo --foobar'

// Arrays
clscompose(["foo", 0, false, "bar"]);
//=> 'foo bar'

// Arrays (variadic)
clscompose(["foo"], ["", 0, false, "bar"], [["baz", [["hello"], "there"]]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
clscompose(
  "foo",
  [1 && "bar", { baz: false, bat: null }, ["hello", ["world"]]],
  "cya"
);
//=> 'foo bar hello world cya'
```
