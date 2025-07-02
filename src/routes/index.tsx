import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="flex items-center justify-between rounded-xl bg-blue-800 px-4 py-4 sm:px-6">
        <p className="font-bold text-blue-50">Dashboard</p>
        <div className="flex items-center gap-x-4">
          <div className="size-8 rounded-full bg-blue-50" />
          <button className="cursor-pointer text-sm font-medium text-blue-50 hover:underline">
            Sign out
          </button>
        </div>
      </header>
      <div className="py-20 text-center">
        <p className="text-lg text-gray-700">
          Welcome <span className="font-bold text-blue-800">User</span>
        </p>
      </div>
    </div>
  );
}
