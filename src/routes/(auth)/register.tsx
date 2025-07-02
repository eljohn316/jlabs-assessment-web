import { createFileRoute, Link } from '@tanstack/react-router';

import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Button } from '@/components/button';

export const Route = createFileRoute('/(auth)/register')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto w-full max-w-xs space-y-10">
      <h3 className="text-center text-2xl font-bold text-gray-900">Register</h3>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </div>
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
        <Button type="submit">Register</Button>
        <p className="text-center text-sm text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-blue-700">
            Login
          </Link>{' '}
        </p>
        instead
      </div>
    </div>
  );
}
