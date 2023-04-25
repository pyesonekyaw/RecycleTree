/* eslint-disable react/display-name */
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DisposeWaste() {
  return (
    <div className="py-4" data-cy="dispose-waste">
      <Accordion.Root
        className="bg-green-100 w-full rounded-lg shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <AccordionItem value="1">
          <AccordionTrigger>
            <p className="text-xl font-medium">General Household Waste</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-md font-normal py-3">
              You can easily recycle your paper, plastic, cans, bottles,
              magazines and more in the blue recycling bin. Just make sure they
              are clean and dry before you toss them in! But if you want to be
              extra sure that your recyclables won’t go to waste because of
              contamination, you can bring them to a{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.tzuchi.org.sg/en/our-missions/environmental-protection/eco-points/"
              >
                Tzu Chi Foundation
              </Link>{" "}
              eco point instead.
            </p>
            <p className="text-md font-normal py-3">
              And don’t worry about your stationery. You can recycle your pens
              at any one of the{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.savethatpen.org/bin-locations-1"
              >
                pen bin locations
              </Link>{" "}
              run by{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.savethatpen.org"
              >
                Save That Pen
              </Link>
              . They will either donate the refillable pens to students who need
              them or separate the plastic and metal parts for recycling. .
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionTrigger>
            <p className="text-xl font-medium">Food</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-md font-normal py-3">
              Composting is one of the easiest ways and fun ways to dispose of
              food waste. You can get started with the{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="http://www.zerowastesg.com/2009/02/04/start-composting-at-home/"
              >
                composting guide
              </Link>{" "}
              from Zero Waste SG, or check out The Smart Local’s{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://thesmartlocal.com/read/composting-in-singapore/"
              >
                beginners guide
              </Link>
              . There are also Facebook pages and groups such as{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.facebook.com/compostinginsingapore/"
              >
                Composting in Singapore
              </Link>{" "}
              and{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.facebook.com/groups/vermicompostsg/"
              >
                Vermicomposting
              </Link>{" "}
              (Worm composting).
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="3">
          <AccordionTrigger>
            <p className="text-xl font-medium">Clothes</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-md font-normal py-3">
              In 2021, Singapore generated more than{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.channelnewsasia.com/singapore/textile-recycling-used-clothes-recycle-bin-singapore-cloop-sustex-3146966"
              >
                189,000 tonnes of textile and leather waste
              </Link>
              , but only 7000 tonnes, or 4% of it was recycled. So, how can you
              responsibly dispose your unwanted clothes without contributing to
              this waste? Here are a few ways to do so: <Link href=""></Link>
            </p>
            <p className="text-md font-normal pt-1">
              ✔️ Swapping, Upcycling and Tailoring
            </p>

            <p className="text-md font-normal ">
              • Join{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.thefashionpulpit.com/"
              >
                The Fashion Pulpit
              </Link>
              , a space for those who value style and sustainability. You can
              either swap your clothes, purchase pre-loved clothes, or make use
              of their upcycling and tailoring services.
            </p>

            <p className="text-md font-normal pt-3">
              ✔️ Collection of Recycled Clothes from Home
            </p>

            <p className="text-md font-normal">
              •{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.greensquare.com.sg/"
              >
                Greensquare
              </Link>{" "}
              helps to provide convenience by collecting clean clothes, wearable
              paired shoes, household linen, accessories (eg. belts and bags)
              from your house. You can also drop them off at these{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.greensquare.com.sg/dropoff"
              >
                locations
              </Link>{" "}
              islandwide.
            </p>

            <p className="text-md font-normal pt-3">
              ✔️ Clothes Recycling Bins{" "}
            </p>

            <p className="text-md font-normal">
              • You can drop off clothes (any brand, any fabric) to be recycled
              in the bins at H&M. Plus, you’ll get a discount on your next
              purchase.
            </p>

            <p className="text-md font-normal pt-3">
              ✔️ Buying or Selling Pre-loved Items
            </p>

            <p className="text-md font-normal pb-3">
              • Visit a{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.refash.sg/start_selling"
              >
                REFASH store
              </Link>{" "}
              , which allows you to buy and sell secondhand fashion
              conveniently. You can list your items for free and REFASH will
              take a 19% handling fee.{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://styletribute.com/"
              >
                StyleTribute
              </Link>{" "}
              offers authentic women’s luxury fashion brands such as Chanel,
              Céline, Hermes, Louis Vuitton, and many more at up to 90% off
              original retail price. Opt for DIY upload to keep 80% of the sale
              price or ‘white-glove’ for hassle-free service to keep 70-75% of
              the sale price
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="4">
          <AccordionTrigger>
            <p className="text-xl font-medium">Electronic Waste</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-md font-normal py-3">
              Before throwing your old smartphone, laptop, or electronic device
              away, consider reselling it on{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://sellup.com.sg/"
              >
                Sell Up
              </Link>{" "}
              if it is still usable, or trade them at any of these{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/recycling-collection-points/"
              >
                Collection Centers
              </Link>
              . Alternatively, locate the nearest E-waste collection points
              using this{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.nea.gov.sg/docs/default-source/our-services/waste-management/list-of-e-waste-collection-points.pdf/"
              >
                list
              </Link>{" "}
              or head over to any of ALBA’s E-waste collection drives. For
              non-regulated e-wastes like Bluetooth speaker, keyboard and mouse,
              you can dispose them at 24 Shell petrol kiosks or KGS Pte Ltd’s
              bins islandwide. Refer to{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/where-to-recycle-e-waste/"
              >
                NEA&apos;s map{" "}
              </Link>
              to filter locations based on the e-waste you would like to dispose
              of.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="5">
          <AccordionTrigger>
            <p className="text-xl font-medium">Furniture</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-md font-normal py-3">
              Pass on your unwanted furniture through{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.passiton.org.sg/about-us"
              >
                Pass It On
              </Link>
              , a community project that provides a meaningful way for you to
              distribute unwanted furniture to those who need them most.
            </p>
            <p className="text-md font-normal py-3">
              Check out{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.facebook.com/freevonation/"
              >
                Freevo Nation
              </Link>
              , a perfect platform for anyone looking to reuse, recycle, upcycle
              or pass on their home items for free. To date, over 14,000 pieces
              of furniture have been given away via this platform.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="6">
          <AccordionTrigger>
            <p className="text-xl font-medium">Lighting Waste</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-md font-normal py-3">
              Dispose your used light bulbs into the 3-in-1 and 2-in-1 bins
              provided by NEA’s appointed Producer Responsibility Scheme
              operator{" "}
              <Link
                className="font-medium text-green-800 underline hover:no-underline"
                target="_blank"
                href="https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/extended-producer-responsibility-(epr)-system-for-e-waste-management-system"
              >
                here
              </Link>
              , or support IKEA’s Light Bulb Recycling Programme and recycle
              your light bulbs at IKEA Alexandra or IKEA Tampines
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
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
          "text-black hover:bg-green-100 group flex h-[45px] flex-1 cursor-default  items-center justify-between bg-green-100 px-5 text-[15px] leading-none py-7 border-solid border-2 border-green-300 rounded-lg",
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
        "bg-[#75db99] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] rounded-lg",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className=" px-5">{children}</div>
    </Accordion.Content>
  )
);
