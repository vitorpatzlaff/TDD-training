'use strict'

import { expect } from "chai"
import map from './map-recursive'

test('map should be a function', () => {
  expect(map).to.be.a('function')
})

test('map([1, 2], (item) => item) should return [1, 2]', () => {
  expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

test('map([3, 4], (item) => item) should return [3, 4]', () => {
  expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

test('map([1, 2], (item) => item + 1) should return [2, 3]', () => {
  expect(map([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
})

test('map([4, 6], (item) => item + 1) should return [5, 7]', () => {
  expect(map([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
})

test('map([1, 2], (item, index) => index should return [0, 1]', () => {
  expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

test('map([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]', () => {
  expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
})

test('map() should return []', () => {
  expect(map()).to.be.deep.equal([])
})

test('map ([1, 2]) should return [1, 2]', () => {
  expect(map([1, 2])).to.be.deep.equal([1, 2])
})