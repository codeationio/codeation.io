import camelCase from 'lodash/camelCase';

export const mapArrToKeys = <T>(keys: string[], row: T[]): Record<string, T> =>
  keys.reduce((obj, key, index) => ({ ...obj, [key]: row[index] || '' }), {});

export const convertArrToObj = (arr: Array<(string | Record<string, unknown>)[]>): Record<string, string | Record<string, unknown>>[] => {
  const values = [...arr];
  let keys: string[] = values.splice(0, 1)[0] as string[];
  keys = keys.map(camelCase);
  const arrOfObj = values.map((row) => mapArrToKeys(keys, row));
  return arrOfObj;
};

export const isValidEmail = (email: string) => {
  const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return regex.test(String(email).toLowerCase());
};
