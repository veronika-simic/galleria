import HomePage from './components/HomePage/Home';
import { SkeletonTheme } from 'react-loading-skeleton';
function App() {
  return (
    <SkeletonTheme baseColor="#B2B2B2" highlightColor="#EAEAEA">
      <HomePage />
    </SkeletonTheme>
  );
}

export default App;
