const dataRequest = (url) => {
  return new Request(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-Auth-Token": "85291242470246f2a6b596d77f6e4327",
    },
  });
};

const CallFootballAPI = async (url) => {
  try {
    const response = await fetch(dataRequest(url));
    return response;
  } catch (e) {
    console.log(e);
  }
};

export default CallFootballAPI;
