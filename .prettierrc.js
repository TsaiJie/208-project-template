//.prettierrc.js文件

module.exports = {
  // 句末加分号 false
  semi: true,
  // 用单引号
  singleQuote: true,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
  // 对象中的空格 默认true true: { foo: bar } false: {foo: bar}
  bracketSpacing: true,
}
