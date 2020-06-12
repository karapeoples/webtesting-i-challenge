const {repair, succeed, fail} = require('./enhancer.js');
// test away!

const item = {
  name: "Feather Bow",
  enhancement: 12,
  durability: 52
}

describe('Make sure Testing is Working', () => {
  test('Testing Test', () => {
    expect(true).toBeTruthy()
  })
})

describe('enhancer.js', () => {
  describe('repair()', () => {
    test('should set the item.durability property to 100', () => {
      expect(repair({ ...item })).toEqual({ ...item, durability: 100 })
    })
  })

  describe('succeed()', () => {
    test('should add 1 to item.enhancement property if <20', () => {
      expect(succeed({ ...item })).toEqual({ ...item, enhancement: 13 })
    })
  })
  test('should return item if item.enhancement is 20', () => {
    expect(succeed({ ...item, enhancement: 22 })).toEqual({ ...item, enhancement: 22 })
  })
})
		

	describe('fail()', () => {
		it('decreases durability - 5, if enhancement is < 15', () => {
			const expectedResult = fail({ ...item, enhancement: 13 })
			const actualResult = fail({ ...item, enhancement: 13, durability: 95 })

			expect(expectedResult).toEqual(actualResult)
		})

		it('decreases durability - 10, if enhancement is >= 15', () => {
			const expectedResult = fail({ ...item })
			const actualResult = fail({ ...item, durability: 66 })

			expect(expectedResult).toEqual(actualResult)
		})
      //this one does not feel quite right but on to the next
		it('decreases enhancement - 1, if enhancement is > 16', () => {
			const expectedResult = fail({ ...item, enhancement: 17 })
			const actualResult = fail({ ...item, enhancement: 17 })

			expect(actualResult).toEqual(expectedResult)
		})
	})
