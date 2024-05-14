import Image from "next/image";
import StarryBackground from "./components/starryBackground/starryBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StarryBackground/>
    </main>
  );
}
