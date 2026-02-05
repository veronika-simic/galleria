import { Box } from '@mui/material';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import { useGetArtifactDetails } from '../../customHooks/useGetArtifactDetails';

export default function InnerPage() {
  const { artifactData } = useGetArtifactDetails();
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
      <LeftCard data={artifactData} />
      <RightCard data={artifactData} />
    </Box>
  );
}
