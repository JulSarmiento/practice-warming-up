module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: [
    '**/controllers/**/*.test.js', // busca archivos de prueba en la carpeta "controllers",
    '**/models/**/*.test.js', // busca archivos de prueba en la carpeta "models",
    '**/routes/**/*.test.js', // busca archivos de prueba en la carpeta "routes",
    '**/test/**/*.test.js', // busca archivos de prueba en la carpeta "routes",
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.js',
    '!node_modules/**',
    '!ruta/a/carpeta/**'
  ],

}