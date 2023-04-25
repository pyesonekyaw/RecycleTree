import { Tab } from "@headlessui/react";
import TitleCard from "@/components/TitleCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function RecycleCanMehPage() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <Tab.Group>
        <Tab.Panel
          key={1}
          className={classNames(
            "rounded-xl bg-white p-3 mt-2",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
          )}
        >
          <TitleCard name={"RecycleCanMeh"} />
          <div className="py-4">
            <gradio-app
              src="https://pyesonekyaw-recycletree.hf.space"
              data-cy="gradio-app"
            ></gradio-app>
          </div>
        </Tab.Panel>
      </Tab.Group>
    </div>
  );
}
