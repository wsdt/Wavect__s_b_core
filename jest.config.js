/* As this is a javaScript file you can simple manipulate or add params to the
 * baseConfig-Json. */

module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '.*.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    cacheDirectory: '.jest/cache',
}

