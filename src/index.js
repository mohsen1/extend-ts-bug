/**
 * @template {T}
 * @extends {Set<T>}
 */
class MySet extends Set {}

// MySet<number>
const mstNum = new MySet([1, 2, 3]);

// MySet<string>
const mstStr = new MySet(["str1", "str2"]);
