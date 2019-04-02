import { Request, Response } from 'express';

export const readHealth = (request: Request, response: Response) => {
  response.send({
    status: 'ok',
    success: 'true',
  });
};
