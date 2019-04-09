import express, { Router } from 'express'
import { Request, Response } from 'express'
import { mockDb } from './database'
import { Unicorn, UnicornSize } from './datamodel'
import axios from 'axios'

export const listUnicorns = (request: Request, response: Response) => {
  response.send({
    success: 'true',
    payload: {
      unicorns: mockDb.unicorns,
    },
  })

  axios.get('google.com')
}

export const createUnicorn = (request: Request, response: Response) => {
  const { name, color, size } = request.body

  if (!Object.values(UnicornSize).includes(size)) {
    response.status(400).send({
      success: false,
      errors: [
        `createUnicorn: unexpected size "${size}", please use one of allowed types ${Object.values(UnicornSize)}`,
      ],
    })

    return
  }

  const unicorn: Unicorn = { name, color, size }
  mockDb.unicorns.push(unicorn)

  response.send({
    success: 'true',
    payload: { unicorn },
  })
}

const unicornResource = express.Router()

unicornResource.get('/', listUnicorns)
unicornResource.post('/', createUnicorn)

export { unicornResource }
