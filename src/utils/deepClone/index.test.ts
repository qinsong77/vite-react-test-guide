import { deepClone } from './index'

test('测试deep clone ', () => {
  const Obj = {
    id: 101,
    email: 'sy@dev.com',
    personalInfo: {
      name: 'sy',
      address: {
        city: 'cd'
      },
      birth: new Date('2022-05-08T18:32:08.670Z')
    }
  }
  expect(deepClone(Obj)).toEqual({
    id: 101,
    email: 'sy@dev.com',
    personalInfo: {
      name: 'sy',
      address: {
        city: 'cd'
      },
      birth: new Date('2022-05-08T18:32:08.670Z')
    }
  })
})
