const sendRequest = (...options) => {
  return fetch(...options)
    .then((res) => res.json())
    .then((json) => Promise.resolve(json));
};

export const get = (url) => {
  return sendRequest(url, { method: "GET" });
};

export const post = (url, data) => {
  return sendRequest(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const del = (url) => {
  return fetch(url, { method: "POST" });
};
