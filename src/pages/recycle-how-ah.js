/* eslint-disable react/display-name */
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Recyclables from "@/components/RecycleHowAh/Recyclables";
import DisposeWaste from "@/components/RecycleHowAh/DisposeWaste";
import Stepper from "@/components/RecycleHowAh/Stepper";
import RecycleStats from "@/components/RecycleHowAh/RecycleStats";
import { Tab } from "@headlessui/react";
import TitleCard from "@/components/TitleCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RecycleHowAhPage() {
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
          <TitleCard name={"RecycleHowAh"} />
          <div className="py-4">
            <Accordion.Root
              className="bg-green-300 w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <AccordionItem value="1">
                <AccordionTrigger className="py-12 border-solid	border-2 border-green-600">
                  <h2 className="font-bold text-xl ">What is Recyclable?</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <Recyclables />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger className="py-12 border-solid	border-2 border-green-600">
                  <h2 className="font-bold text-xl ">
                    Dispose Waste Responsibly
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <DisposeWaste />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger className="py-12 border-solid	border-2 border-green-600">
                  <h2 className="font-bold text-xl ">
                    Determine Recyclability of Item
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <Stepper />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="4">
                <AccordionTrigger className="py-12 border-solid	border-2 border-green-600">
                  <h2 className="font-bold text-xl ">
                    Recycling Statistics in Singapore
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <RecycleStats />
                </AccordionContent>
              </AccordionItem>
            </Accordion.Root>
          </div>
        </Tab.Panel>
      </Tab.Group>
    </div>
  );
}

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-black hover:bg-green-300 group flex h-[45px] flex-1 cursor-default  items-center justify-between bg-green-300 px-5 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "bg-[#dff6e7] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className=" px-5">{children}</div>
    </Accordion.Content>
  )
);
