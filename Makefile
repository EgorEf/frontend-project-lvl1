run:
	npx babel-node 'src/bin/brain-even.js' 8

start:
	npx babel-node 'src/bin/brain-calc.js' 8

install:
	npm install

publishdeb:
	npm publish --dry-run

lint:
	npx eslint .


