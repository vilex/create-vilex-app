#!/usr/bin/env node

import { Command } from 'commander'
import { execSync } from 'child_process'
import project from '../package.json'

let dir = ''
new Command(project.name)
  .version(project.version)
  .arguments("<dir-name>")
  .usage("<dir-name>")
  .action((name) => (dir = name))
  .parse()

console.log(`Start create vilex app...`)
const result = execSync(`git clone -b master https://e.coding.net/worksite/vilex/vilex-app-base.git ${dir} --depth=1`)
console.log(result.toString().trim())
try {
  execSync(`rm -rf ./${dir}/.git`)
} catch (err) {
  console.log(`Please remove the ${dir}/.git manually`)
}

console.log(`cd ${dir} && pnpm install`)
console.log(`pnpm run dev`)

process.exit(0)