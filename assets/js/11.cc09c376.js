(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{430:function(t,s,a){"use strict";a.r(s);var n=a(65),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),a("p",[t._v("The general idea is that you write raw SQL queries, and Mayim takes care of running those queries and hydrating the results into Python objects. Let's start by creating a file called "),a("code",[t._v("basic.py")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" mayim "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Mayim\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    mayim "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mayim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nasyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("Mayim")]),t._v(" class takes a few parameters.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("executors")]),t._v(": a list of "),a("code",[t._v("Executor")]),t._v(" classes or instances")]),t._v(" "),a("li",[a("code",[t._v("dsn")]),t._v(": the DSN to a DB instance (instead of "),a("code",[t._v("pool")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("pool")]),t._v(": a connection pool (instead of "),a("code",[t._v("dsn")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("hydrator")]),t._v(": a custom fallback hydrator (optional)")])]),t._v(" "),a("h2",{attrs:{id:"what-is-an-executor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-executor"}},[t._v("#")]),t._v(" What is an "),a("code",[t._v("Executor")]),t._v("?")]),t._v(" "),a("p",[t._v("We will get into it in "),a("a",{attrs:{href:"executors"}},[t._v("more detail later")]),t._v(", but the "),a("code",[t._v("Executor")]),t._v(" is the object that will be responsible for running your queries. It is the one you will spend the most time interacting with.")]),t._v(" "),a("p",[t._v("You need to:")]),t._v(" "),a("ul",[a("li",[t._v("subclass "),a("code",[t._v("Executor")]),t._v(" (more likely you want one of its subclasses: "),a("code",[t._v("PostgresExecutor")]),t._v(" or "),a("code",[t._v("MysqlExecutor")]),t._v(");")]),t._v(" "),a("li",[t._v("create method definitions that match the names of your SQL statements (yes, those methods will likely be empty);")]),t._v(" "),a("li",[t._v("name the arguments that will be injected into the query; and")]),t._v(" "),a("li",[t._v("provide the model you want to be returned as the return annotation (or annotate it as a "),a("code",[t._v("Dict")]),t._v(" if that is what you want back).")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" List\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" mayim "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PostgresExecutor\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dataclasses "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dataclass\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@dataclass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("City")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    city_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CityExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PostgresExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select_all_cities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("City"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Usually")]),t._v(", your executor will have a bunch of empty methods. That is because Mayim will automatically generate the code needed to run the SQL statement and return the object specified in the return annotation.")]),t._v(" "),a("p",[t._v("In this case, it will try to execute the SQL query called "),a("code",[t._v("./queries/select_all_cities.sql")]),t._v(" (see "),a("a",{attrs:{href:"sqlfiles"}},[t._v("more on writing SQL files")]),t._v("). Then, it will try and turn the result into a list of "),a("code",[t._v("City")]),t._v(" objects.")]),t._v(" "),a("h2",{attrs:{id:"empty-executor-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#empty-executor-methods"}},[t._v("#")]),t._v(" Empty "),a("code",[t._v("Executor")]),t._v(" methods")]),t._v(" "),a("p",[t._v("In its basic form, your "),a("code",[t._v("Executor")]),t._v(" methods should be empty. That means any of the following are acceptable:")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"Ellipsis"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CityExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PostgresExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select_all_cities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("City"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])]),t._v(" "),a("tab",{attrs:{name:"pass"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CityExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PostgresExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select_all_cities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("City"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])])]),t._v(" "),a("tab",{attrs:{name:"docstring"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CityExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PostgresExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select_all_cities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("City"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Fetch all cities"""')]),t._v("\n")])])])])],1)],1)}),[],!1,null,null,null);s.default=e.exports}}]);