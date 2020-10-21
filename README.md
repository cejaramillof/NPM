# NPM
Node package manager

- `mkdir nameFolder`
- `cd nameFolder`
- `git init`
- create `.gitignore` and ignore `/node_modules/`
### Create
- to generate package.json `npm init` - `npm init -yes` - `npm init -y`
- Can use again `npm init`when already have package.json to update or add
- - `npm set init.author.name "Carlos Jaramillo"`
- - `npm set init.author.email "cejaramillof@unal.edu.co"`
- - `npm set init.license "MIT"`

## Dependencies
- `npm list -g --depth 0` show global installeds
- `npm i dependencie` since npm 5 without flag, per default add like prodDependencie
- `npm`
- - `install dependencie` `i` for install dependencie (after edit package.json you require install for apply updates)
- - - `--save` `-S` for prod dependencies
- - - `--save-dev` `-D` for dev dependencies
- - - `--save-exact` `-E` for exact version without `^`
- - - `--save-optional` `-O` for optional dependencies
- - - `-g` for install global package (require permissions)
- - - `--dry-run` to simulate install and print output
- - - `--force` `-f`for force install the latest version from npm servers
- - - `@specific.version` `@latest` for indicate specific version of dependencie
- - `uninstall dependencie` for uninstall package
- - `uninstall dependencie --no-save` to uninstall without update package.json
- - `list` for dependencies on current project
- - `outdate` to show current outdated packages
- - `outdate --dd` to show current output of outdated packages
- - `update` to update all current outdated packages
- - `update package` to update specific package
- - - `--depth 2` to say specific depth to apply update

### Dependencie version
(3.9.2) - (major.minor.patch)
^ caret (for stay updating minor and patch)
~ tilde (for stay updating only patch)
#### major
- breaking change
#### minor
- backwards compatible new functionality
- old funcitonality deprecated, but operational
- large internal refactor
#### patch
- bug fixes

### Scripts
Commands to execute comands from terminal
- `npm run command` to run command
- `&&` to run multiple commands
From terminal
- `--` to send args
- `--dd` to active verbose mode to output changes and debug


### Binaries of each dependencie
- `node_modules/.bin/dependencie`

### Clear Cache
- `npm cache clean --force` or `rm -rf node_modules/`

#### Delete safe with library
- `sudo npm install -g rimraf`
- - `rimraf node_modules`


### Verify cache
`npm cache verify`

### Verify
`npm audit` show vulnerabilities
`npm audit --json` show more details about vulnerabilitie
`npm audit fix` fix vulnerabilities
snky.io usted to stay analyzing update dependencies

### Create reference from local dependencie to npm
`sudo npm link` run at base of dependencie (where are package.json)

### Install local dependencie
`sudo npm install -g path` path at where are package.json

### Add use from npm registry
`npm adduser`

### Publish npm dependencie
`npm publish`

### To update dependencie
- `npm version patch`
- `npm version minor`
- `npm version major`

## VSCODE plugins
- npm (compare package.json with node_modules)
- npm intellisense (helper, paths imports)

Nodemon is used for generate a demon to stay watching changes or values to run a command.

# Shorthands and Other CLI Niceties
- `-v`: --version
- `-h`: -?, --help, -H: --usage
- `-s`: --silent: --loglevel silent
- `-q`: --quiet: --loglevel warn
- `-d`: --loglevel info
- `-dd`: --verbose: --loglevel verbose
- `-ddd`: --loglevel silly
- `-g`: --global
- `-C`: --prefix
- `-l`: --long
- `-m`: --message
- `-p`: --porcelain: --parseable
- `-reg`: --registry
- `-f`: --force
- `-desc`: --description
- `-S`: --save
- `-P`: --save-prod
- `-D`: --save-dev
- `-O`: --save-optional
- `-B`: --save-bundle
- `-E`: --save-exact
- `-y`: --yes
- `-n`: --yes false
- `ll` and la commands: ls --long