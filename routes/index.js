const Router = require('express')
const router = new Router()
const coursesRouter = require('./coursesRouter')
const userRouter = require('./userRouter')

router.use('/courses', coursesRouter)
router.use('/user', userRouter)


module.exports = router