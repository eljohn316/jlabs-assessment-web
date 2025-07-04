import { createRouter } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({
  routeTree,
  notFoundMode: 'root',
  context: {
    auth: undefined!,
  },
});

export { router };
