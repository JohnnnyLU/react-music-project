//const API_KEY = '1b7c7c35-2f48-4023-8108-4ac4914a588b'
const BASE_URL = 'https://musicfun.it-incubator.app/api/1.0'

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

export function getTrack(trackId: string) {

  const promise: Promise<GetTrackDetailsOutput> = fetch(`${BASE_URL}/playlists/tracks/` + trackId, {
    headers: {
      //"api-key": API_KEY,
    }
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
    headers: {
      //'api-key': API_KEY,
    }
  }).then(res => res.json())

  return promise;
}