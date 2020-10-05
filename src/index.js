const express = require('express')
const cors = require('cors')
const { uuid } = require('uuidv4')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())

const { devs } = require('./store')

app.get('/devs', (req, res) => {
  return res.json(devs)
})

app.post('/devs', (req, res) => {
  const { img, name, specialization, like, age, description } = req.body

  const dev = {
    id: uuid(),
    img,
    name,
    specialization,
    like,
    age,
    description
  }

  devs.push(dev)

  return res.json(dev)
})

app.put('/devs/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  const devIndex = devs.findIndex((item) => item.id === id)

  if (devIndex < 0) {
    return res.status(400).json({ error: 'Dev not founded!' })
  }

  const dev = {
    id: body.id,
    img: body.img,
    name: body.name,
    specialization: body.specialization,
    like: body.like,
    age: body.age,
    description: body.description
  }

  devs[devIndex] = dev

  console.log(dev)

  return res.json(dev)
})

app.delete('/devs/:id', (req, res) => {
  return res.json(['Massashi Kishimoto', 'Tite Kubo'])
})

app.get('/images/:name', (req, res) => {
  const { name } = req.params
  return res.sendFile(path.join(__dirname, 'img', name))
})

app.listen(3333, () => {
  console.log('Rodando na porta 3333')
})
