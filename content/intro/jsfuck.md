JSFuck 是一种深奥的 JavaScript 编程风格。以这种风格写成的代码中仅使用 `[` `]` `(` `)` `!` 和 `+` 六种字符。此编程风格的名字派生自 Brainfuck 语言。与其他深奥的编程语言不同，以
JSFuck 风格写出的代码不需要另外的编译器或解释器来执行，无论浏览器或 JavaScript 引擎中的原生 JavaScript 解释器皆可直接运行。鉴于 JavaScript 是弱类型语言，编写者可以用数量有限的字符重写
JavaScript 中的所有功能，且可以用这种方式执行任何类型的表达式。

**基本语法**

| JavaScript | JSFuck                                          |
|------------|-------------------------------------------------|
| false      | `![]`                                           |
| true       | `!![]`                                          |
| undefined  | `[][[]]`                                        |
| NaN        | `+[![]]`                                        |
| 0          | `+[]`                                           |
| 1          | `+!+[]`                                         |
| 2          | `!+[]+!+[]`                                     |
| 10         | `[+!+[]]+[+[]]`                                 |
| Array      | `[]`                                            |
| Number     | `+[]`                                           |
| String     | `[]+[]`                                         |
| Boolean    | `![]`                                           |
| Function   | `[]["filter"]`                                  |
| eval       | `[]["filter"]["constructor"] (CODE)()`          |
| window     | `[]["filter"]["constructor"] ("return this")()` |
