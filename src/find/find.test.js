'use strict'

import { expect } from 'chai'
import find from './find'

test('find should be a function', () => {
  expect(find).to.be.a('function')
})

test('find([1, 2, 3], (item) => item === 1) should return 1', () => {
  expect(find([1, 2, 3], (item) => item === 1)).to.be.equal(1)
})

test('find([1, 2, 3], (item) => item === 3) should return 3', () => {
  expect(find([1, 2, 3], (item) => item === 3)).to.be.equal(3)
})

test('find([1, 2, 3], (item, index) => index === 1) should return 2', () => {
  expect(find([1, 2, 3], (item, index) => index === 1)).to.be.equal(2)
})

test('find([1, 2, 3], (item, index, array) => array[index] === 2) should return 2', () => {
  expect(find([1, 2, 3], (item, index, array) => array[index] === 2)).to.be.equal(2)
})

test('find([1, 2, 3], (item) => item === 4) should return undefined', () => {
  expect(find([1, 2, 3], (item) => item === 4)).to.be.equal(undefined)
})
