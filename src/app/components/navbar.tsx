import Link from "next/link";
import { Home } from "react-feather";

export default function NavBar() {
  return (
    <div className="h-14 px-6 fixed t-0 flex items-center justify-between w-screen z-10 bg-black">
      <div>
        <Link href="/">
          <Home />
        </Link>
      </div>
      <div>
        <Link href="/resume">resume</Link>
      </div>
    </div>
  );
}
