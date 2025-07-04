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
import { registerSchema } from '@/features/auth/schema/register-schema';
import { useAuth } from '@/features/auth/components/auth-provider';

export type RegisterPayload = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  const auth = useAuth();
  const form = useForm<RegisterPayload>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function handleError(err: unknown) {
    const error = err as AxiosError<{ data: Record<string, string[]> }>;
    if (error.status === 400) {
      for (const [path, message] of Object.entries(error.response!.data.data)) {
        form.setError(path as 'name' | 'email' | 'password', {
          message: message.at(0),
        });
      }
      return;
    }
    setError('Something went wrong');
  }

  async function onSubmit(values: RegisterPayload) {
    try {
      await auth.register(values);
      navigate({ to: '/register' });
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-xs space-y-10">
        <h3 className="text-center text-2xl font-bold text-gray-900">
          Register
        </h3>
        {error && (
          <div className="flex items-center gap-x-2.5 rounded-md bg-red-100 p-4 text-sm text-red-800">
            <CircleXIcon />
            {error}
          </div>
        )}
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button type="submit">Register</Button>
          <p className="text-center text-sm text-gray-700">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-700">
              Login
            </Link>{' '}
            instead
          </p>
        </div>
      </form>
    </Form>
  );
}
