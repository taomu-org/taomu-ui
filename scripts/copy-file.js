import fs from 'fs'
import path from 'path'

const rootPath = process.cwd()
const distPath = path.join(rootPath, './dist')

fs.copyFileSync(path.join(rootPath, './package.json'), path.join(distPath, './package.json'))
fs.copyFileSync(path.join(rootPath, './README.md'), path.join(distPath, './README.md'))
fs.copyFileSync(path.join(rootPath, './LICENSE'), path.join(distPath, './LICENSE'))
