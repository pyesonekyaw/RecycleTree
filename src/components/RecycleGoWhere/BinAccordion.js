import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import IndividualBin from "./IndividualBin";

export default function BinAccordion({ bins }) {
  return (
    <Accordion.Root
      className="bg-green-300 w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
      type="single"
      defaultValue="item-1"
      collapsible
      data-cy="bin-accordion"
    >
      {bins.map((bin) => (
        <IndividualBin bin={bin} key={bin.name} />
      ))}
    </Accordion.Root>
  );
}
