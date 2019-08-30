run:
	npx babel-node 'src/bin/brain-games.js' 8

install:
	npm install

publishdeb:
	npm publish --dry-run

lint:
	npx eslint .


