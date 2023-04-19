/**
 * Helper HTTP verbs.
 */
const HTTP_VERBS = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
};

/**
 * A proxy request sender that resolves the reponse from the server.
 *
 * @param  {...any} options options to pass to fetch
 * @returns a promise
 */
const sendRequest = (...options) => {
  return fetch(...options)
    .then((res) => res.json())
    .then((json) => Promise.resolve(json));
};

/**
 *
 * @param {String} url target location where request to be send to
 * @returns a promise
 */
export const get = (url) => {
  return sendRequest(url, { method: HTTP_VERBS.GET });
};

/**
 *
 * @param {String} url target location where request to be send to
 * @param {Object} data the body of the request
 * @returns a promise
 */
export const post = (url, data) => {
  return sendRequest(url, {
    method: HTTP_VERBS.POST,
    body: JSON.stringify(data),
  });
};

/**
 *
 * @param {String} url target location where request to be send to
 * @param {Object} data the body of the request
 * @returns
 */
export const del = (url, data) => {
  return sendRequest(url, {
    method: HTTP_VERBS.DELETE,
    body: JSON.stringify(data),
  });
};
