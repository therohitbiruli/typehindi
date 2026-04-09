import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TypeHindi.in - Best Hindi Typing Platform',
    short_name: 'TypeHindi',
    description: 'Master Hindi typing with InScript keyboard. Free lessons, games, and WPM tracking.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712', // Darker theme color
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
