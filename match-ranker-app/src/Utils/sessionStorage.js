export const setSessionData = (property, data) => {
  sessionStorage.setItem(property, JSON.stringify(data));
  console.log(`${property} data is now stored`);
};

export const getSessionData = (property) => {
  let jsonData;
  try {
    jsonData = sessionStorage.getItem(property);
    // console.log(`Session ${property}:`, JSON.parse(jsonData));
  } catch (e) {
    console.error(e);
  }
  return JSON.parse(jsonData);
};
