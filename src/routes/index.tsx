import { createFileRoute } from '@tanstack/react-router';
import { UserCard } from '@/features/auth/components/user-card';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <nav className="flex items-center justify-between rounded-xl bg-gray-900 px-5 py-4">
        <p className="font-bold text-gray-50">Dashboard</p>
        <button className="cursor-pointer text-sm font-medium text-gray-50 hover:underline">
          Sign out
        </button>
      </nav>
      <div className="py-20">
        <UserCard
          user={{
            id: 1,
            image:
              'https://api.dicebear.com/9.x/initials/svg?seed=El%20John%20Bonga',
            name: 'El John Bonga',
            email: 'bongaeljohn@gmail.com',
            dateJoined: new Date(),
          }}
        />
      </div>
    </div>
  );
}
