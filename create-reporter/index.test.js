import { is } from 'uvu/assert'
import { test } from 'uvu'

import { createStdout } from '../test/utils/index.js'
import { createReporter } from './index.js'

test('should reported log correctly', () => {
  let stdout = createStdout()
  let { log } = createReporter({ stream: stdout })

  log('Run log')
  is(stdout.out, 'Run log\n')
})

test('should reported info correctly', () => {
  let stdout = createStdout()
  let { info } = createReporter({ stream: stdout })

  info('Run info')
  is(stdout.out, '\x1B[36m-\x1B[39m Run info\n')
})

test('should reported step correctly', () => {
  let stdout = createStdout()
  let { step } = createReporter({ stream: stdout })

  step('Run step')
  is(stdout.out, '\x1B[32m-\x1B[39m Run step...\n')
})

test('should reported print correctly', () => {
  let stdout = createStdout()
  let { print } = createReporter({ stream: stdout })

  print('Run print')
  is(stdout.out, 'Run print')
})

test.run()
