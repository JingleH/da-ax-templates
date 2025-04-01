const path = require('path');

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijdzb2k4N3pkb3NJRnc4b19fbVR5a082QlVRNEZBVGhjaHlyNGZqY1dSbWcifQ.eyJlbWFpbCI6ImppbmdsaHVhQGFkb2JlLmNvbSIsInVzZXJfaWQiOiIxQTc0MDRFMTYwRDEzRUYzMEE0OTVGQzRAYWRvYmUuY29tIiwiaW1zVG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0luZzFkU0k2SW1sdGMxOXVZVEV0YTJWNUxXRjBMVEV1WTJWeUlpd2lhMmxrSWpvaWFXMXpYMjVoTVMxclpYa3RZWFF0TVNJc0ltbDBkQ0k2SW1GMEluMC5leUpwWkNJNklqRTNORE15TURRM05qTXdORGRmT0dKak5UWXdaVEl0TVdJM1lTMDBaVGRqTFdFM1pUWXRObVJqTVdJd01HSXdOMkl3WDNWbE1TSXNJblI1Y0dVaU9pSmhZMk5sYzNOZmRHOXJaVzRpTENKamJHbGxiblJmYVdRaU9pSm9aV3hwZUMxaFpHMXBiaUlzSW5WelpYSmZhV1FpT2lJeFFUYzBNRFJGTVRZd1JERXpSVVl6TUVFME9UVkdRelJBWVdSdlltVXVZMjl0SWl3aWMzUmhkR1VpT2lKbGVVcG9Za2RqYVU5cFNuVmlNalZzU1c0d0xtVjVTbmRqYlRsMFkwaFJhVTlwU25WaU1qVnNTV2wzYVdJelNtNUphbTlwV1ZkU2RsbHRWV2xtVVM0aUxDSmhjeUk2SW1sdGN5MXVZVEVpTENKaFlWOXBaQ0k2SWpGQk56UXdORVV4TmpCRU1UTkZSak13UVRRNU5VWkRORUJoWkc5aVpTNWpiMjBpTENKamRIQWlPakFzSW1abklqb2lXa3RKU2pOVU5FWldVRkExVFVoVlMwaE5VVlpaTjBGQk1qUWlMQ0p6YVdRaU9pSXhOelF6TWpBeU5ESTBOakF4WDJJNE5EbGxObVJqTFRka1l6UXROR1U0T0MwNFl6aG1MV1poTnpRelpEaG1aR1pqT0Y5MWR6SWlMQ0p5ZEdsa0lqb2lNVGMwTXpJd05EYzJNekEwT0Y4MVlqSmtOelptTUMwM1l6aGpMVFJpWWpZdE9ESXdOaTFqTnpJeFpESXdNek0zTkdKZmRXVXhJaXdpYlc5cElqb2lZelExWlRsbU1XUWlMQ0p3WW1FaU9pSk5aV1JUWldOT2IwVldMRXh2ZDFObFl5SXNJbkowWldFaU9pSXhOelEwTkRFME16WXpNRFE0SWl3aVpYaHdhWEpsYzE5cGJpSTZJamcyTkRBd01EQXdJaXdpWTNKbFlYUmxaRjloZENJNklqRTNORE15TURRM05qTXdORGNpTENKelkyOXdaU0k2SWtGa2IySmxTVVFzYjNCbGJtbGtMSEJ5YjJacGJHVXNaVzFoYVd3c1lXSXViV0Z1WVdkbExHZHVZWFlzYjNKbkxuSmxZV1FzY21WaFpGOXZjbWRoYm1sNllYUnBiMjV6TEhObGMzTnBiMjRzWVdSa2FYUnBiMjVoYkY5cGJtWnZMbTkzYm1WeVQzSm5MR0ZsYlM1bWNtOXVkR1Z1WkM1aGJHd2lmUS5LZlZleDEyS0hnWDI4aHN4aExKYURwb2lZdUNvWG1vUFZueVptcVh1RWg0OG5yQjRKU28zWjFqOG51c2JMaUdDdlBVMFZqUnd5NkdsTHBlVGw2aTZtMGNoakJubjh3M2JFWjhBb2Z0NUpOMkczTEJ1RzlGckVncllCdFZ5d0x5TG1ZU2k0SWpodjhrTTQ4N3lyM0ZOa2hiTnVLcDJkYUFVanFOQ2Y1b0ZQbm9lSlcyeGxoRlVUUEtqOTFoSGdNcTlaZTNTUFA5dGtKUGdwQ2Q2OVh4SlcyX1JtR2FWbFA2eE5YRmg5aFpYYTJlTmM1RElmd0dGYnBVYnhPSUpWM2hjdXpJeXBaMFhBdVlHdGczWGVpeEdaNnBMSmdfN3hKTnpSZkxBWUp1TnN1dEVaRVc1T2Jqa3lxQ2pMUjZJTG1aTlZHNmkwTmdCYjNsU2lNRWxGemJncnciLCJpYXQiOjE3NDMyMDQ3NjMsImlzcyI6Imh0dHBzOi8vYWRtaW4uaGx4LnBhZ2UvIiwic3ViIjoiKi8qIiwiYXVkIjoiODNhMzYzNTUtYWQxNy00ZWQwLTg3MDEtZTk5YTMwMjBmODZhIiwiZXhwIjoxNzQzMjkxMTYzfQ.FtuwGq9S2-VlEOS4Y7M0n2JBkcq3t6a8DA_E17z5wz5Os26Sk1m-wmZwwmw0K32MLXCUvAw8cocC13oj_i815dRf-JvX19YxghatUL-8cOskr74NHDFs1haw6amlrh49BCHkG2chDd-rKvsTyOEC6H7FROI-G_o5mbeaFYljOnCA7DZrNx-VrDkEN6m9vX-mmLll3bY6JSj4jh5KCbI6s0DVWt4ZUr07CHwxDUPnyfY8c3H3Wo5BRyHdZDn8pp98ufUWjd6fSAMjU3H-OWz7EUaE5FBfbPTHYx6RT8p-XkUlU6J5srMKvgvtBQIH_aJU5Fk9v9XDHVCSFuZW02hEaA';
const DA_API = 'https://admin.da.live';
const ORG = 'jingleh';
const REPO = 'da-ax-templates';
const ROOT = `${ORG}/${REPO}`;

function isDir(file) {
  return !!file.ext;
}

function isDoc(file) {
  return file?.ext === 'html';
}

async function throwFetchErr(res) {
  const errorText = await response.text();
  throw new Error(`${response.status} - ${response.statusText}: ${errorText}`);
}

async function ls(dir) {
  const headers = { Authorization: `Bearer ${token}` };
  const url = path.join(DA_API, 'list', dir);
  const resp = await fetch(url, { method: 'GET', headers });
  if (!resp.ok) {
    throwFetchErr(resp);
  }
  return resp.json();
}

async function cat(file) {
  const headers = { Authorization: `Bearer ${token}` };
  const url = path.join(DA_API, 'source', file);
  const resp = await fetch(url, { method: 'GET', headers });
  if (!resp.ok) {
    throwFetchErr(resp);
  }
  if (/\.html$/.exec(file)) {
    return resp.text();
  }
  return resp.json();
}

function parseBodyText(bodyText) {
  const parser = new DOMParser();
  return parser.parseFromString(bodyText, 'text/html');
}

module.exports = {
  token,
  DA_API,
  ROOT,
  isDir,
  isDoc,
  ls,
  cat,
  parseBodyText,
};