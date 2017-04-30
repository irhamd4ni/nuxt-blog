import { Router } from 'express'

var router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Sébastien' }
]

/* GET posts by ID. */
router.get('/posts/:id', function (req, res, next) {
  var id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router