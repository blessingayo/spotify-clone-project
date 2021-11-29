// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "8765545b25344f0095aa282cbadd8093";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash

    .substring(1)
    .split("&")
    .reduce((tracker, part) => {
      var space = part.split("=");
      tracker[space[0]] = decodeURIComponent(space[1]);

      return tracker;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=
${redirectUri}&scope=${scopes.join("%20")}&response_type=token
&show_dialog=true`;

// http://localhost:3000/#
// access_token=BQDPLPc3RadJwX5HPtKMyCzEClaQlIWJ2aXx2s4meOLGqr4R8Jp_NWj5YIyNeHxj7Y0Y2O2Pjj8BW4eMQuQJ4CMGesvVTX-HY0l8ek63nEkTzkHfFpAmvNoFo-9Nc5pDkFaUx2xG0bPak6lDPrMhFGE04Te2WFoYOAahe9GlvXLwYqkYeRqz
// token_type=Bearer
// expires_in=3600
