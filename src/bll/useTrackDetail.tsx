import {useEffect, useState} from "react";
import {getTrack, type TrackDetailsResource} from "../dal/api.ts";

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] = useState<TrackDetailsResource | null>(null)

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null)
      return
    }

    setTrackDetails(null)

    getTrack(trackId)
      .then(json => setTrackDetails(json.data))
  }, [trackId]);

  return {
    trackDetails,
  }
}
