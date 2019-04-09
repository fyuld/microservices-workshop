import { Request, Response } from 'express';

export const readHealth = (request: Request, response: Response) => {
  response.send({
    success: 'true',
    status: 'ok',
  });
};
