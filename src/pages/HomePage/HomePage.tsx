import ArtifactGrid from '../../components/ArtifactGrid/ArtifactGrid';
import { useGetData } from '../../customHooks/useGetData';

export default function HomePage() {
  const { artifacts, loading, error } = useGetData();

  if (error) return <div>{error}</div>;

  return <ArtifactGrid artifacts={artifacts} loading={loading} />;
}
