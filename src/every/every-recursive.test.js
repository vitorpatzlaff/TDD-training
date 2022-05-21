'use strict'

import { expect } from "chai"
import every from './every-recursive'

test('every should be a function', () => {
  expect(every).to.be.a('function')
})

test('every([1, 2, 3], (item) => item > 0) should return true', () => {
  expect(every([1, 2, 3], (item) => item > 0)).to.be.ok
})

test('every([1, 2, 3], (item) => item > 1) should return false', () => {
  expect(every([1, 2, 3], (item) => item > 1)).to.be.not.ok
})

test('every([1, 2, 3], (item, index) => item === index + 1) should return true', () => {
  expect(every([1, 2, 3], (item, index) => item === index + 1)).to.be.ok
})

test('every([1, 2, 3, 5], (item, index) => item === index + 1) should return false', () => {
  const before = every([1, 2, 3, 5], (item, index) => item === index + 1) 
  expect(before).to.be.not.ok
})

test('every([1, 2, 3, 2, 5,], (item, index, array) => index === array.indexOf(item)) should return false', () => {
  const before = every([1, 2, 3, 2, 5], (item, index, array) => index === array.indexOf(item))
  expect(before).to.be.not.ok
})

test('every() should return true', () => {
  expect(every()).to.be.ok
})

test('every([1, 2, 3]) should return true', () => {
  expect(every([1, 2, 3])).to.be.ok
})
