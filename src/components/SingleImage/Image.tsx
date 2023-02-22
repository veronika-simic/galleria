import { ArtifactModel } from '../../models/Artifacts';

export default function SingleImage(props: { data: ArtifactModel }) {
  return <img src={props.data.webImage.url} alt={props.data.longTitle} loading="lazy" />;
}
