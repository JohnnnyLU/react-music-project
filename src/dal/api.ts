const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.BASE_URL

type TrackDetailsAttributes = {
  title: string;
  lyrics: string | null;
}

export type TrackDetailsResource = {
  id: string;
  attributes: TrackDetailsAttributes
}

type GetTrackDetailsOutput = {
  data: TrackDetailsResource
}  // Gen

const prepareHeaders = () => {
  if (!API_KEY) return undefined

  return {
    "api-key": import.meta.env.VITE_API_KEY
  }
}

export function getTrack(trackId: string) {

  const promise: Promise<GetTrackDetailsOutput> = fetch(`${BASE_URL}/playlists/tracks/` + trackId, {
    headers: prepareHeaders()
  }).then((res) => res.json())

  return promise;
}


type TrackAttachment = {
  url: string;
}

type TrackListItemAttributes = {
  title: string;
  attachments: Array<TrackAttachment>;
}

export type TrackListItemResource = {
  id: string;
  attributes: TrackListItemAttributes
}

type GetTrackListOutput = {
  data: Array<TrackListItemResource>
}  // Gen

export function getTracks() {
  const promise: Promise<GetTrackListOutput> = fetch(`${BASE_URL}/playlists/tracks`, {
    headers: prepareHeaders()
  }).then(res => res.json())

  return promise;
}