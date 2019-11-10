/** Parent of package.json scripts.
 * We are using 'nps' which extracts our scripts from package.json and
 * adds them to a local package-scripts.js. Therefore, we are able to have
 * here a parent js-File from which the services extend their scripts to sustain
 * maintainability.
 *
 * To run the initilization command (to extract all scripts from the package.json
 * into a separate package-scripts.js just run following commands):
 * - npm i nps --save-dev
 * - ./node_modules/.bin/nps init
 *
 * If you want to use .yml instead of .js just add --type yml behind the init
 * command. Commands which output the constant error message need to
 * be overwritten in child js-Files.
 */

module.exports = {
    scripts: {
        default: 'concurrently --kill-others "tsc -w" "nodemon ./dist/server.js"',
        once: 'ts-node ./src/server.ts',
        production: 'node ./dist/server.js',
        build: 'tsc',
        clean: 'rimraf ./dist',
        test: 'jest --detectOpenHandles',
        prettier: 'prettier --write "**/*.{ts,tsx,js,jsx,scss,css,json}"',
        tslint: 'tslint -p ./tsconfig.json',
        tslintFix: 'tslint --fix -p ./tsconfig.json',
        evaluate: 'yarn test && yarn start prettier && yarn start tslintFix',
    },
}
