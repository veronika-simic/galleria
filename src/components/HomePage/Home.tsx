import Masonry from '@mui/lab/Masonry';
import Artifact from '../SingleImage/Artifact';
import { ArtifactModel } from '../../types/Artifacts';
import { useGetData } from '../../customHooks/useGetData';

export default function HomePage() {
  const { data, error, loading } = useGetData();

  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}>
      {data?.length > 0 &&
        data.map((item: ArtifactModel) => (
          <Artifact key={item.id} data={item} loading={loading} />
        ))}
    </Masonry>
  );
}
