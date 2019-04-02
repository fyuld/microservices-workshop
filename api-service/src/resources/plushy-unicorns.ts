import { Request, Response } from 'express';
import { PlushyUnicorn } from '../datamodel';

export type MockUnicornsDatabase = {
  [id: string]: PlushyUnicorn;
};

const mockUnicornsDatabase: MockUnicornsDatabase = {};

export type ListPlushyUnicornsPayload = {
  payload: PlushyUnicorn[];
};

export const listPlushyUnicorns = (request: Request, response: Response) => {
  const unicorns: PlushyUnicorn[] = Object.values(mockUnicornsDatabase);
  const payload: ListPlushyUnicornsPayload = {
    payload: unicorns,
  };

  response.send(payload);
};

type ReadPlushyUnicornsPayload = {
  payload: PlushyUnicorn;
};

const readPlushyUnicorn = (request: Request, response: Response) => {
  const { id } = request.params;
  const unicorn = mockUnicornsDatabase[id];
  const payload: ReadPlushyUnicornsPayload = {
    payload: unicorn,
  };
};

const createPlushyUnicorn = (request: Request, response: Response) => {
  console.log('createPlushyUnicorn');
};
