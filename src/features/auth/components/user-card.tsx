import type { User } from '@/lib/types';

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="mx-auto max-w-3xs rounded-xl border border-gray-200 p-8 shadow-sm">
      <div className="flex flex-col gap-y-8">
        <img
          src={user.image}
          alt={user.name}
          className="size-16 self-center rounded-full bg-gray-200"
        />
        <div className="divide-y divide-gray-200 text-center *:py-2 *:first:pt-0 *:last:pb-0">
          <p className="text-xl font-semibold text-gray-900">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">
            joined on{' '}
            <span className="font-medium">
              {user.dateJoined.toDateString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
