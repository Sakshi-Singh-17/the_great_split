import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CINE STREAM</h1>
      <h2>Popular Movies</h2>

      <Link href="/movies"> Search Movies </Link>
    </main>
  );
}
