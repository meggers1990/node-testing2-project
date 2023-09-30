const users = require('./user-models')
const db = require('../../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

test('enviroment is testing', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

describe('getAll', () => {
  test('resolves all the Users in the table', async () =>{
    const result = await users.getAll()
    // console.log(result)
    expect(result).toHaveLength(3)
    expect(result[0]).toMatchObject({name: 'Alejandro'})
  })
})

describe('getById', () => {
  test('resolve the user by the given id', async () =>{
    const result = await users.getById(1)
    expect(result).toMatchObject({name: 'Alejandro'})
  })
})

describe('insert', () => {
  const monte = {name: 'monte', email: 'monte@gmail.com'}
  test('insert new User', async () => {
    const result = await users.add(monte)
    expect(result).toMatchObject(monte)
  })
  test('add the User to the users table', async () => {
    await users.add(monte)
    const records = await db('users')
    expect(records).toHaveLength(4)
  })
})