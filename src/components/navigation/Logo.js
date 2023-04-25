import Image from "next/image";
import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="relative py-4 z-10 px-2 flex lg:px-0 "
      data-cy="logo"
    >
      <div className="h-28 md:h-36 m-auto lg:h-48">
        <Image
          alt="Banner"
          src="/static/banner.png"
          fill
          className="px-3 py-3"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
