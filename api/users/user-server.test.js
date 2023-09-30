const db = require('../../data/db-config')
const request = require('supertest')
const server = require('../server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  
  beforeEach(async () => {
    await db.seed.run()
  })


  describe('[GET] /users', () => {
    test('responds with 200 ok', async () =>{
        const res = await request(server).get('/api/users')
        expect(res.status).toBe(200)
    })
    test('respond with all users', async () => {
        const res = await request(server).get('/api/users')
        expect(res.body).toHaveLength(3)
    })
  })

  describe('[GET] /users/:id', () => {
    test('responds users by id with 200 ok', async () =>{
        const res = await request(server).get('/api/users/:id')
        expect(res.status).toBe(200)
    })
    test('respond users with id', async () => {
        const id  = 1
        const res = await request(server).get(`/api/users/${id}`)
        expect(res.body).toHaveProperty('id', id)
    })
  })