import Link from "next/link";
import { Home } from "react-feather";

export default function NavBar() {
  return (
    <div className="h-14 px-6 fixed top-0 flex items-center justify-between w-full max-w-8xl z-10 bg-transparent  backdrop-blur-lg">
      <div>
        <Link href="/">
          <Home />
        </Link>
      </div>
      <div className="text-3xl">
        <Link href="/resume">resume</Link>
      </div>
    </div>
  );
}
