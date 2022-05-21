'use strict'

const reverse = (arr = []) => {
  let revArr = []
  for (let i = 0; i < arr.length; i++)
    revArr[arr.length - i - 1] = arr[i]
  
  return revArr
}

export default reverse
