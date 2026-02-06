import Masonry from '@mui/lab/Masonry';
import ArtifactCard from './ArtifactCard';
import { ArtifactInterface } from '../../types/Artifacts';
import ArtifactSkeleton from './ArtifactSkeleton';

interface Props {
  artifacts: ArtifactInterface[];
  loading: boolean;
}

const SKELETON_COUNT = 12;

export default function ArtifactGrid({ artifacts, loading }: Props) {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
      {loading
        ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <ArtifactSkeleton key={i} />
          ))
        : artifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
    </Masonry>
  );
}
