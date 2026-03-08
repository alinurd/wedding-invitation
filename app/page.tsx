// app/page.tsx
import { Suspense } from 'react';
import ClientHome from '../app/ClientHome';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientHome />
    </Suspense>
  );
}