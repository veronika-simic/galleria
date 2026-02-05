import { Box } from '@mui/material';
import { useGetArtifactDetails } from '../../customHooks/useGetArtifactDetails';
import ArtifactImage from '../../components/ArtifactDetails/ArtifactImage';
import ArtifactInfo from '../../components/ArtifactDetails/ArtifactInfo';

function ArtifactDetailsPage() {
  const { artifactData, loading, error } = useGetArtifactDetails();

  if (loading || !artifactData) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-evenly',
        alignItems: 'center',
        rowGap: '1.5rem',
      }}
    >
      <ArtifactImage artifact={artifactData} />
      <ArtifactInfo artifact={artifactData} />
    </Box>
  );
}

export default ArtifactDetailsPage;
