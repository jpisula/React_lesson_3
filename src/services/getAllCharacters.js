import { NARUTO_API_URL } from '../constants/constants';

export const getAllCharacters = async () => {
  return fetch(`${NARUTO_API_URL}/character?page=1&limit=50`).then((resp) =>
    resp.json()
  );
};
