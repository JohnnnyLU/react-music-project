import {useEffect, useState} from "react";
import {getTracks, type TrackListItemResource} from "../dal/api.ts";

export function useTracks() {
  const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null)

  useEffect(() => {
    getTracks().then(json => setTracks(json.data))
  }, [])

  return {
    tracks,
  }
}