import { NARUTO_API_URL } from '../constants/constants';

export const getCharacterById = async (id) => {
  return fetch(`${NARUTO_API_URL}/character/${id}`).then((resp) => resp.json());
};
