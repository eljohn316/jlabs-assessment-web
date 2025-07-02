import * as React from 'react';
import { cn } from '@/lib/utils';

export function Input({
  type,
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'block w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring focus:ring-blue-700 focus:ring-offset-1 focus:outline-none',
        className,
      )}
      {...props}
    />
  );
}
