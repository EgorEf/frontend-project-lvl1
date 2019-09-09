even:
	npx babel-node 'src/bin/brain-even.js' 8

calc:
	npx babel-node 'src/bin/brain-calc.js' 8

gcd:
	npx babel-node 'src/bin/brain-gcd.js' 8

install:
	npm install

publishdeb:
	npm publish --dry-run

lint:
	npx eslint .


