import type {TrackListItemResource} from "../dal/api.ts";
import styles from "./TracksList.module.css";
import clsx from "clsx";

type Props = {
  onSelect: (trackId: string) => void
  isSelected: boolean;
  track: TrackListItemResource
}

export function TrackItem({onSelect, track, isSelected}: Props) {
  const handleClick = () => onSelect?.(track.id)

  const className = clsx({
    [styles.track]: true,
    [styles.selected]: isSelected,
  })

  return (
    <li key={track.id} className={className}>
      <div
        className={styles.trackTitle}
        onClick={handleClick}
        title={track.attributes.title}
      >{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}
