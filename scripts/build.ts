import { InputOptions, OutputOptions, rollup } from 'rollup'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

const inputOptions: InputOptions = {
  input: 'src/index.ts',
  external: [
    'commander',
    'child_process',
    '../package.json'
  ],
  plugins: [
    json(),
    terser()
  ]
}

const outputOptions: OutputOptions = {
  file: 'dist/create-vilex-app.js',
  format: 'commonjs'
}

async function build() {
  const bundle = await rollup(inputOptions)
  await bundle.generate(outputOptions)
  await bundle.write(outputOptions)
}

build()