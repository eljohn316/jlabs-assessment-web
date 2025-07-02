import * as React from 'react';
import { cn } from '@/lib/utils';

export function Button({
  className,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'block w-full cursor-pointer rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 focus:ring focus:ring-blue-700 focus:ring-offset-1 focus:outline-none',
        className,
      )}
      {...props}
    />
  );
}
