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

const results = files.map(file => {
  const fileContents = program.getSourceFile(file).getFullText();
  const configuration = Configuration.findConfiguration(configPath, file)
    .results;
  linter.lint(file, fileContents, configuration);
  return linter.getResult();
});

console.log(results);
