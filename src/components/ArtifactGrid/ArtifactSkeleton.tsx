import { Card, Skeleton } from '@mui/material';

export default function ArtifactSkeleton() {
  const height = 250 + Math.random() * 250;

  return (
    <Card>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={height}
        animation="wave"
      />
    </Card>
  );
}
