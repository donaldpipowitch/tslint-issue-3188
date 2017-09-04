const { Linter, Configuration } = require('tslint');
const { join } = require('path');

const configPath = join(__dirname, 'tslint.json');

const lintOptions = {
  formatter: 'codeFrame',
  rulesDirectory: [],
  formattersDirectory: '',
  fix: true
};

const program = Linter.createProgram('tsconfig.json');
const files = Linter.getFileNames(program);
const linter = new Linter(lintOptions, program);

files.forEach(file => {
  const fileContents = program.getSourceFile(file).getFullText();
  const conf = Configuration.findConfiguration(configPath, file).results;
  linter.lint(file, fileContents, conf);
});

const result = linter.getResult();
console.log(result);
