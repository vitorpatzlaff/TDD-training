'use strict'

import { expect } from 'chai'
import filter from './filter'

test('filter should be a function', () => {
  expect(filter).to.be.a('function')
})

test('filter([1, 2, 3], (item) => item) should return [1, 2, 3]', () => {
  expect(filter([1, 2, 3], (item) => item)).to.be.deep.equal([1, 2, 3])
})

test('filter([0, 1, 2], (item) => item) should return [1, 2]', () => {
  expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

test('filter([1, 2, 3], (item) => item < 2) should return [1]', () => {
  expect(filter([1, 2, 3], (item) => item < 2)).to.be.deep.equal([1])
})

test('filter([1, 2, 3, 5], (item, index) => item === index + 1) should return [1, 2, 3]', () => {
  expect(filter([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3])
})

test('filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) should return [1, 2, 3, 5]', () => {
  const before = filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) 
  expect(before).to.be.deep.equal([1, 2, 3, 5])
})

test('filter() should return []', () => {
  expect(filter()).to.be.deep.equal([])
})
  
test('filter([1, 2]) should return [1, 2]', () => {
  expect(filter([1, 2])).to.be.deep.equal([1, 2])
})