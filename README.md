:bulb: This issue was fixed! See the last commit or the issue for details.

This is an example project to demonstrate: https://github.com/palantir/tslint/issues/3188.

```sh
$ yarn
$ npm run lint

> tslint-issue-3188@1.0.0 lint /Users/foo/tslint-issue-3188
> node tslint.js

/Users/foo/tslint-issue-3188/node_modules/typescript/lib/typescript.js:3549
            throw e;
            ^

Error: Debug Failure. False expression.
    at tryReuseStructureFromOldProgram (/Users/foo/tslint-issue-3188/node_modules/typescript/lib/typescript.js:69957:22)
    at Object.createProgram (/Users/foo/tslint-issue-3188/node_modules/typescript/lib/typescript.js:69713:34)
    at Linter.updateProgram (/Users/foo/tslint-issue-3188/node_modules/tslint/lib/linter.js:170:31)
    at /Users/foo/tslint-issue-3188/node_modules/tslint/lib/linter.js:163:19
    at Map.forEach (native)
    at Linter.applyFixes (/Users/foo/tslint-issue-3188/node_modules/tslint/lib/linter.js:152:21)
    at _loop_1 (/Users/foo/tslint-issue-3188/node_modules/tslint/lib/linter.js:135:33)
    at Linter.applyAllFixes (/Users/foo/tslint-issue-3188/node_modules/tslint/lib/linter.js:142:13)
    at Linter.lint (/Users/foo/tslint-issue-3188/node_modules/tslint/lib/linter.js:81:33)
    at files.map.file (/Users/foo/tslint-issue-3188/tslint.js:21:10)
```
