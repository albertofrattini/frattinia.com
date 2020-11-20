import querystring from 'querystring'

const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env

const base64Token = Buffer.from(`${client_id}:${client_secret}`).toString(
    'base64'
)
const NOW_PLAYING_EP = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_EP = `https://api.spotify.com/v1/me/top/tracks`
const TOKEN_EP = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
    const response = await fetch(TOKEN_EP, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${base64Token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    })

    return response.json()
}

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken()

    return fetch(NOW_PLAYING_EP, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })
}

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken()

    return fetch(TOP_TRACKS_EP, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })
}
