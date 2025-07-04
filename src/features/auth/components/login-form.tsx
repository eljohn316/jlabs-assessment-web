import { useState } from 'react';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from '@tanstack/react-router';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { CircleXIcon } from '@/components/icons';
import { loginSchema } from '@/features/auth/schema/login-schema';
import { useAuth } from '@/features/auth/components/auth-provider';

export type LoginPayload = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  const auth = useAuth();
  const form = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleError(err: unknown) {
    const error = err as AxiosError<{ message: string }>;
    if (error.status === 401) {
      setError(error.response?.data.message);
      return;
    }
    setError('Something went wrong');
  }

  async function onSubmit(values: LoginPayload) {
    try {
      await auth.login(values);
      navigate({ to: '/' });
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-xs space-y-10">
        <h3 className="text-center text-2xl font-bold text-gray-900">Login</h3>
        {error && (
          <div className="flex items-center gap-x-2.5 rounded-md bg-red-100 p-4 text-sm text-red-800">
            <CircleXIcon />
            {error}
          </div>
        )}
        {auth.error && (
          <div className="flex items-center gap-x-2.5 rounded-md bg-red-100 p-4 text-sm text-red-800">
            <CircleXIcon />
            {auth.error}
          </div>
        )}
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <Button type="submit">Submit</Button>
          <p className="text-center text-sm text-gray-700">
            Don't have an account yet?{' '}
            <Link to="/register" className="font-semibold text-blue-700">
              Register
            </Link>{' '}
            here
          </p>
        </div>
      </form>
    </Form>
  );
}
