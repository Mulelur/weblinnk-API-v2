#!/usr/bin/env node

/**
 * This is a sample HTTP server.
 * Replace this with your implementation.
 */

import 'dotenv/config'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { Config } from './config.js'
import app from './app.js'

const nodePath = resolve(process.argv[1])
const modulePath = resolve(fileURLToPath(import.meta.url))
const isCLI = nodePath === modulePath

const main = (port: number = Config.port) => {
  const server = app

  if (isCLI) {
    server.listen(port)
    // eslint-disable-next-line no-console
    console.log(`Listening on port: ${port}`)
  }
  // eslint-disable-next-line no-console
  console.log('hello')

  return server
}

if (isCLI) {
  main()
}

export default main
