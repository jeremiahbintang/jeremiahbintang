import type { Metadata } from "next";
import { Linkedin } from "react-feather";

export const metadata: Metadata = {
  title: "Jeremiah Bintang",
  description:
    "A portfolio / personal pet project of mine. Look forward for other exciting stuff!",
};

export default function Page() {
  return (
    <div className="max-w-8xl m-auto">
      <div className="flex flex-col justify-between items-start h-screen">
        <div className="px-6 py-8 text-3xl cursor-pointer">
          <div>home</div>
        </div>
        <div className="px-6 py-8 flex flex-col gap-3">
          <div className="text-7xl">Jeremiah Bintang Santoso</div>
          <div>
            A shtick in software development, a curiosity in biology, a love for
            theology, and an itch for adventure
          </div>
          <div>Based in Munich, born in Indonesia</div>
          <div>
            <a
              href="https://www.linkedin.com/in/jeremiahbintang/"
              target="_blank"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
