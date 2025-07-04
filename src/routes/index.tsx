import { createFileRoute, Navigate, redirect } from '@tanstack/react-router';
import { UserCard } from '@/features/auth/components/user-card';
import { useAuth } from '@/features/auth/components/auth-provider';

export const Route = createFileRoute('/')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="mx-auto max-w-5xl p-6">
      <nav className="flex items-center justify-between rounded-xl bg-gray-900 px-5 py-4">
        <p className="font-bold text-gray-50">Dashboard</p>
        <button
          className="cursor-pointer text-sm font-medium text-gray-50 hover:underline"
          onClick={() => logout()}>
          Sign out
        </button>
      </nav>
      <div className="py-20">
        <UserCard user={user} />
      </div>
    </div>
  );
}
