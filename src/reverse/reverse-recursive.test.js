'use strict'

import { expect } from "chai"
import reverse from './reverse-recursive'

test('reverse should be a function', () => {
  expect(reverse).to.be.a('function')
})

test('reverse([1, 2, 3]) should return [3, 2, 1]', () => {
  expect(reverse([1, 2, 3])).to.be.deep.equal([3, 2 ,1])
})

test('reverse([5, 10, 15]) should return [15, 10, 5]', () => {
  expect(reverse([5, 10, 15])).to.be.deep.equal([15, 10, 5])
})

test('reverse() should return []', () => {
  expect(reverse()).to.be.deep.equal([])
})

test('reverse(["Vitor", "Hugo"]) should return ["Hugo", "Vitor"]', () => {
  expect(reverse(["Vitor", "Hugo"])).to.be.deep.equal(["Hugo", "Vitor"])
})
