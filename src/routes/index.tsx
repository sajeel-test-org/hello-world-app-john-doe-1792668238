import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-red-600 px-6 text-center text-white">
      <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg sm:text-7xl">Hello, World! 👋</h1>
      <p className="text-lg text-white/80 sm:text-xl">Welcome to your very first app.</p>
    </main>
  );
}
