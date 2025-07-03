import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <nav className="flex items-center justify-between rounded-xl bg-gray-900 px-4 py-4 sm:px-6">
        <p className="font-bold text-gray-50">Dashboard</p>
        <button className="cursor-pointer text-sm font-medium text-gray-50 hover:underline">
          Sign out
        </button>
      </nav>
      <div className="py-20 text-center">
        <p className="text-lg text-gray-700">
          Welcome <span className="font-bold text-blue-800">User</span>
        </p>
      </div>
    </div>
  );
}
