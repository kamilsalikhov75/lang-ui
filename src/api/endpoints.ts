const apiUrl = "http://localhost:4000/";

export const endPoints = {
  register: `${apiUrl}user/register`,
  login: `${apiUrl}user/login`,
  updateSavedWords: `${apiUrl}user/saved-words`,
  getUser: `${apiUrl}user/me`,
  getWords: `${apiUrl}word`,
};
