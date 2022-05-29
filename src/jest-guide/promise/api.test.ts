import { fetchList, getOnePost } from './api'

describe('test async fetchList', () => {
  test('测试 fetchList 的返回值为 { code: 200 } using return', () => {
    return fetchList().then((res) => {
      expect(res).toEqual({ code: 200 })
    })
  })

  test('测试 fetchList 的返回值包含 404', () => {
    return fetchList(false).catch((err) => {
      expect.assertions(1)
      expect(err.toString()).toMatch('404')
    })
  })

  test('测试 fetchList 的返回值为 { code: 200 } using resolve', () => {
    return expect(fetchList()).resolves.toEqual({ code: 200 })
  })

  test('测试 fetchList 的返回值包含 404 with reject', () => {
    // expect.assertions(1)
    return expect(fetchList()).rejects.toEqual(new Error('404'))
  })
})

const post = {
  userId: 1,
  id: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}

describe('test getOnePost ', () => {
  test('getOnePost success should be', async () => {
    const res = await getOnePost()
    expect(res.data).toEqual(post)
  })

  test('getOnePost fail should be', async () => {
    await expect(getOnePost()).rejects.toBe(400)
  })
})
