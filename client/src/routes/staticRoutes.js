import { Home, Error404, PrivacyPolicy, About, TOS, AppLink } from '../views';

const staticRoutes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    component: TOS
  },
  {
    path: '/app',
    name: 'App',
    component: AppLink
  },
  {
    path: '/404',
    name: '404',
    component: Error404
  },
  {
    path: '/:ref?',
    name: 'Home',
    component: Home
  }
];

export default staticRoutes;
