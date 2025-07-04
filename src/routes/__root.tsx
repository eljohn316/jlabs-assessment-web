import * as React from 'react';
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { AuthContext } from '@/features/auth/components/auth-provider';

type RouteContext = {
  auth: AuthContext;
};

export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-svh flex-col justify-center px-4">
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Page not found</h3>
        <p className="text-sm font-medium text-gray-700">
          Go back to{' '}
          <Link to="/" className="font-semibold text-blue-700 hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
