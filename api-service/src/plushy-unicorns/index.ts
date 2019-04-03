import { Request, Response } from 'express';
import { PlushyUnicorn, PlushySize } from '../datamodel';

export type MockUnicornsDatabase = {
  [id: string]: PlushyUnicorn;
};

const mockUnicornsDatabase: MockUnicornsDatabase = {};

export type ListPlushyUnicornsPayloadSuccess = {
  success: true;
  payload: PlushyUnicorn[];
};

export type ListPlushyUnicornsPayloadError = {
  success: false;
  errors: string[];
};

export type ListPlushyUnicornsPayload = ListPlushyUnicornsPayloadSuccess | ListPlushyUnicornsPayloadError;

const pl: ListPlushyUnicornsPayload = {
  success: false,
  // payload: [{ id: '', name: '', color: '123', size: PlushySize.Huge }],
  errors: ['abc'],
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
