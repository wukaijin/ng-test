/*
 * @Author: carlos
 * @Date: 2023-08-11 17:28:31
 * @LastEditTime: 2023-08-14 10:10:11
 * @FilePath: \ng-test\find-empty-file.js
 * @Description: null
 */

const path = require('path')
const fs = require('fs')
const textEmptyRegexp = /^\s*$/

async function findEmptyFile(dir) {
  ls
  const files = await fs.promises.readdir(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stats = await fs.promises.stat(filePath)
    if (stats.isDirectory()) {
      findEmptyFile(filePath)
    } else {
      if (textEmptyRegexp.test(await fs.promises.readFile(filePath))) {
        console.log(filePath)
      }
    }
  }
}
findEmptyFile(path.resolve(__dirname, 'src'))
// findEmptyFile(path.resolve(__dirname, '../../metro/schedule/dispatch-client-angular/src'))
