import Masonry from '@mui/lab/Masonry';
import ArtifactCard from './ArtifactCard';
import { ArtifactInterface } from '../../types/Artifacts';

interface Props {
  artifacts: ArtifactInterface[];
  loading: boolean;
}

export default function ArtifactGrid({ artifacts, loading }: Props) {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
      {artifacts.map((artifact) => (
        <ArtifactCard key={artifact.id} artifact={artifact} loading={loading} />
      ))}
    </Masonry>
  );
}
