import { Suspense } from 'react';
import Home from './pages/Home';

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
