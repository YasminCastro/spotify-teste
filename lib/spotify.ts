import axios from "axios";

const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string;

const SPOTIFY_URL_API = "https://api.spotify.com/v1";

const getAccessToken = async () => {
  try {
    const credentials = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`;
    const token = Buffer.from(credentials).toString("base64");

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
      {
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error to get access token:", error);
    throw error;
  }
};

export const topTracks = async () => {
  try {
    const { access_token } = await getAccessToken();

    const response = await axios.get(`${SPOTIFY_URL_API}/me/top/tracks`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error to get top tracks:", error);
    throw error;
  }
};

export const topArtists = async () => {
  try {
    const { access_token } = await getAccessToken();
    const response = await axios.get(`${SPOTIFY_URL_API}/me/top/artists`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error to get top artists:", error);
    throw error;
  }
};

export const currentlyPlayingSong = async () => {
  try {
    const { access_token } = await getAccessToken();
    const response = await axios.get(
      `${SPOTIFY_URL_API}/me/player/currently-playing`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error to get top artists:", error);
    throw error;
  }
};
