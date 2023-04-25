/* eslint-disable react/display-name */

import React, { useState } from "react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SewingPinIcon } from "@radix-ui/react-icons";
import { Rating } from "react-simple-star-rating";
import { supabase } from "../../../utils/supabaseClient";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function IndividualBin({ bin }) {
  // Ratings - States for Rating Count, Rating, whether user has rated or not
  const [rating, setRating] = useState(bin.rating_score);
  const [ratingCount, setRatingCount] = useState(bin.rating_number);
  const [rated, setRated] = useState(false);

  const handleRating = async (rate) => {
    var newRating = (rate + ratingCount * rating) / (ratingCount + 1);
    setRating(newRating);
    setRatingCount(ratingCount + 1);
    setRated(true);
    const { data, error } = await supabase
      .from("RecycleBins")
      .update({ rating_score: newRating, rating_number: ratingCount + 1 })
      .eq("name", bin.name);
  };

  // Existence Voting - States for Yes, No, and whether user has voted or not
  const [existenceYes, setExistenceYes] = useState(bin.existence_yes);
  const [existenceNo, setExistenceNo] = useState(bin.existence_no);
  const [existenceVoted, setExitenceVoted] = useState(false);

  const handleExistenceYes = async () => {
    const { data, error } = await supabase
      .from("RecycleBins")
      .update({ existence_yes: existenceYes + 1 })
      .eq("name", bin.name);
  };

  const handleExistenceNo = async () => {
    const { data, error } = await supabase
      .from("RecycleBins")
      .update({ existence_no: existenceNo + 1 })
      .eq("name", bin.name);
  };

  return (
    <div
      className="text-[13px] leading-[18px]"
      key={bin.name}
      data-cy="individual-bin"
    >
      <AccordionItem value={bin.name}>
        <AccordionTrigger className="py-12 border-solid	border-2 border-green-600">
          <Image
            priority
            src="/static/RecycleBin.svg"
            height={32}
            width={32}
            alt="svg"
          />
          <div className="flex flex-col items-center mx-3">
            <p className="font-bold my-1">{bin.name} </p>{" "}
            <p className="font-normal">
              {bin.dist_meters.toFixed(2)} meters away{" "}
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-3 gap-4 items-center">
              <Link
                href={
                  "http://www.google.com/maps/place/" +
                  bin["lat"] +
                  "," +
                  bin["lon"]
                }
              >
                <div className="flex items-center">
                  <SewingPinIcon className="flex-none" />
                  <p className="text-blue-800 font-bold my-1 flex-initial hover:underline decoration-blue-500">
                    Google Maps
                  </p>
                </div>
              </Link>
              <div className="col-span-2 ">
                <div className="flex flex-col gap-y-2">
                  <p className="font-bold my-1">Does it exist?</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      disabled={existenceVoted ? true : false}
                      type="button"
                      class=" bg-[#8FFB8E] enabled:hover:bg-[#56f953]  font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50"
                      onClick={() => {
                        setExistenceYes(existenceYes + 1);
                        setExitenceVoted(true);
                        handleExistenceYes();
                      }}
                      data-cy="vote-yes-btn"
                    >
                      Yes: {existenceYes}
                    </button>
                    <button
                      disabled={existenceVoted ? true : false}
                      type="button"
                      class=" bg-[#FBA78E] enabled:hover:bg-[#f8663a]  font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50"
                      onClick={() => {
                        setExistenceNo(existenceNo + 1);
                        setExitenceVoted(true);
                        handleExistenceNo();
                      }}
                      data-cy="vote-no-btn"
                    >
                      No: {existenceNo}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold my-1">Cleanliness Rating</p>
              <div>
                <Rating
                  readonly={rated ? true : false}
                  className="w-auto flex"
                  SVGstyle={{ display: "inline-block" }}
                  onClick={handleRating}
                  allowFraction
                  initialValue={rating}
                  data-cy="rating-stars"
                />
                <p className="font-normal">{ratingCount} ratings</p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
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
          "text-black hover:bg-green-300 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-green-300 px-5 text-[15px] leading-none outline-none",
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
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);
