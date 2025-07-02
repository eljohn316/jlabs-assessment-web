import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-col justify-center px-6">
      <Outlet />
    </div>
  );
}
