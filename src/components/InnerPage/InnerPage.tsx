import { getDataById } from '../api/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArtifactData } from '../../models/ArtifactData';
import CardMedia from '@mui/material/CardMedia';

export default function InnerPage() {
  const { artifactId } = useParams();
  const [artifactData, setArtifactData] = useState<any>([]);
  useEffect(() => {
    const getArtifactData = async () => {
      const response = await getDataById(artifactId);
      setArtifactData(response);
    };
    getArtifactData();
  }, []);
  return (
    <>
      <h1>{artifactData.title}</h1>
      <h1>{artifactData.principalMaker}</h1>
      <img src={artifactData.webImage.url} />
    
    </>
  );
}
