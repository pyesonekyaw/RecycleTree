import Image from "next/image";
import { useRouter } from "next/router";
import { Tab } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavItem({ item }) {
  const router = useRouter();

  return (
    <Tab
      key={item.name}
      className={({ selected }) =>
        classNames(
          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-700",
          "ring-white ring-opacity-60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2",
          selected
            ? "bg-white shadow"
            : "text-green-100 hover:bg-white/[0.12] hover:text-white"
        )
      }
    >
      <div
        className="flex flex-col items-center"
        onClick={() => router.push(item.href)}
      >
        <Image src={item.image} alt={item.name} width={100} height={100} />
        {item.name}
      </div>
    </Tab>
  );
}
