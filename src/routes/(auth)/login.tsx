import { createFileRoute, Link } from '@tanstack/react-router';

import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Button } from '@/components/button';

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto w-full max-w-xs space-y-10">
      <h3 className="text-center text-2xl font-bold text-gray-900">Login</h3>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" />
        </div>
      </div>
      <div className="space-y-4">
        <Button type="submit">Login</Button>
        <p className="text-center text-sm text-gray-700">
          Don't have an account yet?{' '}
          <Link to="/register" className="font-semibold text-blue-700">
            Register
          </Link>{' '}
          here
        </p>
      </div>
    </div>
  );
}
