"use client";

export default function Home() {
  function spotifyLogin() {
    console.log("spotifyLogin");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={spotifyLogin}>Entre no spotify</button>
    </main>
  );
}
