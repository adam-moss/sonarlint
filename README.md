# sonarlint

Package [Sonarlint for Command Line](http://www.sonarlint.org/commandline/index.html) as an [npm](https://npmjs.com) module.

Sonarlint provides pre-commit feedback to developers on new bugs and quality issues injected into code, with several languages supported and simple usage.

## Getting started

```sh
npm install --save-dev sonarlint
```

## Using

Add `sonarlint` to your test suite like this, or see my [package.json](package.json) for an example of how I do it:

```json
    "test": "sonarlint --src 'src/**' --tests 'test/**'"
```
[ _Sonarlint for Command Line is licensed under the GNU Lesser Public License v3.0_ ]
