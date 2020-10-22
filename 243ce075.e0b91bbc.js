(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||i;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(116)),c={title:"Running Code in the Cloud"},o={unversionedId:"cheatsheet/script-run-config",id:"cheatsheet/script-run-config",isDocsHomePage:!1,title:"Running Code in the Cloud",description:"ScriptRunConfig",source:"@site/docs/cheatsheet/script-run-config.md",slug:"/cheatsheet/script-run-config",permalink:"/azureml-examples/docs/cheatsheet/script-run-config",editUrl:"https://github.com/Azure/azureml-examples/tree/main/website/docs/cheatsheet/script-run-config.md",version:"current",sidebar:"mainSidebar",previous:{title:"Experiment and Run",permalink:"/azureml-examples/docs/cheatsheet/run"},next:{title:"Metrics",permalink:"/azureml-examples/docs/cheatsheet/logging"}},s=[{value:"ScriptRunConfig",id:"scriptrunconfig",children:[]},{value:"Command Line Arguments",id:"command-line-arguments",children:[{value:"Example: <code>sys.argv</code>",id:"example-sysargv",children:[]},{value:"Example: <code>argparse</code>",id:"example-argparse",children:[]}]},{value:"Using Datasets",id:"using-datasets",children:[{value:"via Arguments",id:"via-arguments",children:[]},{value:"via RunConfiguration",id:"via-runconfiguration",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"scriptrunconfig"},"ScriptRunConfig"),Object(i.b)("p",null,"A common way to run code in the cloud is via the ",Object(i.b)("inlineCode",{parentName:"p"},"ScriptRunConfig")," which packages\nyour source code (Script) and run configuration (RunConfig)."),Object(i.b)("p",null,"Consider the following layout for your code."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"source_directory/\n    script.py    # entry point to your code\n    module1.py   # modules called by script.py     \n    ...\n")),Object(i.b)("p",null,"To run ",Object(i.b)("inlineCode",{parentName:"p"},"script.py")," in the cloud via the ",Object(i.b)("inlineCode",{parentName:"p"},"ScriptRunConfig")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"config = ScriptRunConfig(\n    source_directory='<path/to/source_directory>',\n    script='script.py',\n    compute_target=target,\n    environment=env,\n    arguments = [\n        '--learning_rate', 0.001,\n        '--momentum', 0.9,\n    ]\n)\n")),Object(i.b)("p",null,"where:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"source_directory='source_directory'")," : Local directory with your code."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"script='script.py'")," : Script to run. This does not need to be at the root of ",Object(i.b)("inlineCode",{parentName:"li"},"source_directory"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"compute_taget=target")," : See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"copute-target"}),"Compute Target")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"environment")," : See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"environment"}),"Environment")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"arguments")," : See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#command-line-arguments"}),"Arguments"))),Object(i.b)("h2",{id:"command-line-arguments"},"Command Line Arguments"),Object(i.b)("p",null,"To pass command line arguments to your script use the ",Object(i.b)("inlineCode",{parentName:"p"},"arguments")," parameter in ",Object(i.b)("inlineCode",{parentName:"p"},"ScriptRunConfig"),".\nArguments are passed as a list"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"arguments=[first, second, third, ...]\n")),Object(i.b)("p",null,"which are then passed to the script as command-line arguments as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console"}),"$ python script.py first second third ...\n")),Object(i.b)("p",null,"This also supports using named arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"arguments=['--first_arg', first_val, '--second_arg', second_val, ...]\n")),Object(i.b)("p",null,"Arguments can be of type ",Object(i.b)("inlineCode",{parentName:"p"},"int"),", ",Object(i.b)("inlineCode",{parentName:"p"},"float")," ",Object(i.b)("inlineCode",{parentName:"p"},"str")," and can also be used to reference data."),Object(i.b)("p",null,"For more details on referencing data via the command line: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"dataset#use-dataset-in-a-remote-run"}),"Use dataset in a remote run")),Object(i.b)("h3",{id:"example-sysargv"},"Example: ",Object(i.b)("inlineCode",{parentName:"h3"},"sys.argv")),Object(i.b)("p",null,"In this example we pass two arguments to our script. If we were running this from the\nconsole:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console",metastring:'title="console"',title:'"console"'}),"$ python script.py 0.001 0.9\n")),Object(i.b)("p",null,"To mimic this command using ",Object(i.b)("inlineCode",{parentName:"p"},"argument")," in ",Object(i.b)("inlineCode",{parentName:"p"},"ScriptRunConfig"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="run.py"',title:'"run.py"'}),"arguments = [0.001, 0.9]\n\nconfig = ScriptRunConfig(\n    source_directory='.',\n    script='script.py',\n    arguments=arguments,\n)\n")),Object(i.b)("p",null,"which can be consumed as usual in our script:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="script.py"',title:'"script.py"'}),"import sys\nlearning_rate = sys.argv[1]     # gets 0.001\nmomentum = sys.argv[2]          # gets 0.9\n")),Object(i.b)("h3",{id:"example-argparse"},"Example: ",Object(i.b)("inlineCode",{parentName:"h3"},"argparse")),Object(i.b)("p",null,"In this example we pass two named arguments to our script. If we were running this from the\nconsole:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console",metastring:'title="console"',title:'"console"'}),"$ python script.py --learning_rate 0.001 --momentum 0.9\n")),Object(i.b)("p",null,"To mimic this behavior in ",Object(i.b)("inlineCode",{parentName:"p"},"ScriptRunConfig"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="run.py"',title:'"run.py"'}),"arguments = [\n    '--learning_rate', 0.001, \n    '--momentum', 0.9,\n    ]\n\nconfig = ScriptRunConfig(\n    source_directory='.',\n    script='script.py',\n    arguments=arguments,\n)\n")),Object(i.b)("p",null,"which can be consumed as usual in our script:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="script.py"',title:'"script.py"'}),"import argparse\nparser = argparse.Argparser()\nparser.add_argument('--learning_rate', type=float)\nparser.add_argument('--momentum', type=float)\nargs = parser.parse_args()\n\nlearning_rate = args.learning_rate      # gets 0.001\nmomentum = args.momentum                # gets 0.9\n")),Object(i.b)("h2",{id:"using-datasets"},"Using Datasets"),Object(i.b)("h3",{id:"via-arguments"},"via Arguments"),Object(i.b)("p",null,"Pass a dataset to your ScriptRunConfig as an argument"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"# create dataset\ndatastore = ws.get_default_datastore()\ndataset = Dataset.File.from_files(path=(datastore, '<path/on/datastore>'))\n\narguments = [\n    '--dataset', dataset.as_mount()\n]\n\nconfig = ScriptRunConfig(\n    source_directory='.',\n    script='script.py',\n    arguments=arguments,\n)\n")),Object(i.b)("p",null,"This mounts the dataset to the run where it can be referenced by ",Object(i.b)("inlineCode",{parentName:"p"},"script.py"),"."),Object(i.b)("h3",{id:"via-runconfiguration"},"via RunConfiguration"),Object(i.b)("p",null,"Pass a dataset to your ScriptRunConfig without using command-line arguments."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"# create dataset\ndatastore = ws.get_default_datastore()\ndataset = Dataset.File.from_files(path=(datastore, '<path/on/datastore>'))\n\nconfig = ScriptRunConfig(\n    source_directory='.',\n    script='script.py',\n)\n\nconfig.run_config.data['<name>'] = dataset.as_mount('<path_on_compute>')\n")),Object(i.b)("p",null,"This mounts the dataset to the run at the specified ",Object(i.b)("inlineCode",{parentName:"p"},"'<path_on_compute>'")," where\nit can be referenced by ",Object(i.b)("inlineCode",{parentName:"p"},"script.py"),"."))}l.isMDXComponent=!0}}]);