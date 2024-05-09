import Link from 'next/link';

const PATHS = [
  {
    path: '/dashboard/me/settings',
    label: 'Settings',
  },
  {
    path: '/auth/login',
    label: 'Login',
  },
];

export default function Home() {
  return (
    <main>
      <h1>Hello World :)</h1>
      <ul>
        {PATHS.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
