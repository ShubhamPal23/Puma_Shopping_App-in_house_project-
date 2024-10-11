import url from "../Utils/constants.jsx";

async function fetchingdata() {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url);
    const object = await response.json();
    return object;
  } catch (err) {
    throw err;
  }
}

export default fetchingdata;
