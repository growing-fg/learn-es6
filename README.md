# learn-es6

## let
定义大括号作用域内的变量，在作用域外无法访问变量

## const
定义常量，一旦被赋值后便不可修改

## class
+  定义类，类的构造方法名为constructor
+  继承类使用关键字extands
+  使用static定义类的静态方法

## 模板字符串
+  使用反引号\`\`定义模板客串，字符串中可使用$\{\}引用变量及方法
+  模板字符串中可以换行

## String
+  startsWith() 判断是否以指定的字符串开头
+  endsWith()  判断是否以指定的字符串结尾
+  includes() 判断是否包含指定的字符串

## Number
+  使用16进制，以0x开头，如0xFF或0xff === 255
+  使用2进制，以0b开头，0b10 === 2
+  使用8进制，以0o开头, 0o77 === 63

+  Number.isFinite()  判断是否为有限数
+  Number.isNaN()  判断是否为NaN
+  Number.isInteger()  判断是否为整数，Number.isInteger(5.5) === false