import { RouterProvider } from '@tanstack/react-router';
import { useSpinDelay } from 'spin-delay';
import { router } from '@/lib/router';
import {
  AuthProvider,
  useAuth,
} from '@/features/auth/components/auth-provider';
import { FullPageLoader } from '@/components/full-page-loader';

function InternalApp() {
  const auth = useAuth();
  const loading = useSpinDelay(typeof auth.user === 'undefined', {
    minDuration: 300,
  });

  if (loading) return <FullPageLoader />;

  return <RouterProvider router={router} context={{ auth }} />;
}

export function App() {
  return (
    <AuthProvider>
      <InternalApp />
    </AuthProvider>
  );
}
