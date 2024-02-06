import { NARUTO_API_URL } from '../constants/constants';

export const getCharacterByName = async (name) => {
  return fetch(`${NARUTO_API_URL}/character/search?name=${name}`).then((resp) =>
    resp.json()
  );
};
