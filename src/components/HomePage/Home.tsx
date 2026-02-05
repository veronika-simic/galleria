import Masonry from '@mui/lab/Masonry';
import Artifact from './Artifact';
import { ArtifactInterface } from '../../types/Artifacts';
import { useGetData } from '../../customHooks/useGetData';

export default function HomePage() {
  const { artifacts, error, loading } = useGetData();

  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}>
      {artifacts?.length > 0 &&
        artifacts.map((artifact: ArtifactInterface) => (
          <Artifact key={artifact.id} artifact={artifact} loading={loading} />
        ))}
    </Masonry>
  );
}
