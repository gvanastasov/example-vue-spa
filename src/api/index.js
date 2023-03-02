export const get = (url) => {
  return fetch(url, { method: "GET" });
};

export const post = (url, data) => {
  return fetch(url, { method: "POST", body: JSON.stringify(data) });
};

export const del = (url) => {
  return fetch(url, { method: "POST" });
};
