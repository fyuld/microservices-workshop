import { PlushyUnicorn } from 'src/datamodel';

const id = () => Math.round(Math.random() * Date.now()).toString(16);

const createPlushyUnicorn = (name: any, color: any, size: any): PlushyUnicorn => {
  const plushyUnicorn = {
    id: id(),
    name,
    color,
    size,
  };

  return plushyUnicorn;
};
