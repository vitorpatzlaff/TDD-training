'use strict'

import { expect } from "chai"
import some from './some'

test('some should be a function', () => {
  expect(some).to.be.a('function')
})

test('some([1, 2, 3], (item) => item > 0) should return true', () => {
  expect(some([1, 2, 3], (item) => item > 0)).to.be.ok
})

test('some([1, 2, 3], (item) => item > 3) should return false', () => {
  expect(some([1, 2, 3], (item) => item > 3)).to.be.not.ok
})

test('some([1, 2, 3], (item, index) => index % 2 === 0) should return true', () => {
  expect(some([1, 2, 3], (item, index) => index % 2 === 0)).to.be.ok
})

test('some([1, 3, 5], (item, index) => index % 2 === 0) should return false', () => {
  const before = some([1, 3, 5], (item, index) => item % 2 === 0) 
  expect(before).to.be.not.ok
})

test('some([1, 2, 3], (item, index, array) => array.length === 4) should return false', () => {
  const before = some([1, 2, 3], (item, index, array) => array.length === 4)
  expect(before).to.be.not.ok
})

test('some() should return true', () => {
  expect(some()).to.be.not.ok
})

test('some([1, 2, 3]) should return true', () => {
  expect(some([1, 2, 3])).to.be.not.ok
})