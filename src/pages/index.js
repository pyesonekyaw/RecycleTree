import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { Tab } from "@headlessui/react";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import BinSlider from "@/components/RecycleGoWhere/BinSlider";
import InfoCard from "@/components/RecycleGoWhere/InfoCard";
import TitleCard from "@/components/TitleCard";
import BinAccordion from "@/components/RecycleGoWhere/BinAccordion";

import { Crosshair2Icon } from "@radix-ui/react-icons";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function RecycleGoWherePage() {
  const [radius, setRadius] = useState(1);
  const [location, setLocation] = useState("");
  const [show, setShow] = useState(false);
  const [bins, setBins] = useState({});
  const [showBins, setshowBins] = useState(false);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    options: {
      componentRestrictions: { country: "sg" },
      fields: "geometry.location",
    },
    debounce: 1500,
  });

  const queryNearbyBins = async (lat_input, long_input, maxi) => {
    const { data, error } = await supabase.rpc("nearby_bins_2", {
      lat_input,
      long_input,
      maxi,
    });
    if (error) console.error(error);
    else {
      setBins(data);
      setshowBins(true);
    }
  };

  useEffect(() => {
    if (showBins && bins && location) {
      queryNearbyBins(lat, lon, radius);
    }
  }, [radius]);

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
          <div className="flex flex-col items-center gap-y-2 text-center">
            <TitleCard name={"RecycleGoWhere"} />

            <div className="w-48 md:w-96">
              <BinSlider
                data-cy="bin-slider"
                onValueChange={(radius) => setRadius(radius[0])}
              />
              <p>Number of nearest bins: {radius}</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-72 lg:w-96">
                <input
                  type="text"
                  id="Location Query"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                  placeholder="Search location..."
                  required
                  onChange={(evt) => {
                    getPlacePredictions({ input: evt.target.value });
                    setLocation(evt.target.value);
                    setShow(true);
                  }}
                  value={location}
                  data-cy="search"
                  // loading={isPlacePredictionsLoading}
                />
              </div>
              <div>
                <button
                  className="relative inline-flex items-center justify-center p-3 overflow-hidden rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300"
                  data-cy="search-btn"
                >
                  <Crosshair2Icon
                    className="z-10"
                    onClick={() => {
                      navigator.geolocation.getCurrentPosition(
                        async (position) => {
                          var lat_input = position.coords.latitude;
                          var long_input = position.coords.longitude;
                          var maxi = radius;
                          const { data, error } = await supabase.rpc(
                            "nearby_bins_2",
                            {
                              lat_input,
                              long_input,
                              maxi,
                            }
                          );
                          if (error) console.error(error);
                          else {
                            setBins(data);
                            setshowBins(true);
                          }
                          setLat(lat_input);
                          setLon(long_input);
                          setLocation("Current Location");
                          // setShow(true);
                        },
                        () => null
                      );
                    }}
                  />
                </button>
              </div>
            </div>
            <div
              className="max-w-md pt-5 space-y-5"
              data-cy="search-suggestions"
            >
              {show && (
                <ScrollArea.Root className="w-[22rem] h-48 rounded overflow-hidden bg-white shadow-black pl-2">
                  <ScrollArea.Viewport className="w-full h-full rounded">
                    <div className="px-5">
                      <div className="text-[15px] leading-[18px] font-medium">
                        Please select from the suggestions below:
                      </div>

                      {placePredictions.map((item) => (
                        <div
                          className="text-[13px] mt-2.5 border-solid border-2 border-teal-500 rounded-lg hover:bg-teal-500"
                          key={item.place_id}
                          onClick={() => {
                            setLocation(item.description);
                            setShow(false);
                            placesService?.getDetails(
                              {
                                placeId: item.place_id,
                                fields: ["geometry.location"],
                              },
                              async (place) => {
                                var lat_input = place.geometry.location.lat();
                                var long_input = place.geometry.location.lng();
                                var maxi = radius;
                                setLat(lat_input);
                                setLon(long_input);
                                const { data, error } = await supabase.rpc(
                                  "nearby_bins_2",
                                  {
                                    lat_input,
                                    long_input,
                                    maxi,
                                  }
                                );
                                if (error) console.error(error);
                                else {
                                  setBins(data);
                                  setshowBins(true);
                                }
                              }
                            );
                          }}
                        >
                          {item.description}
                        </div>
                      ))}
                    </div>
                  </ScrollArea.Viewport>
                  <ScrollArea.Scrollbar
                    className="flex select-none touch-none bg-white transition-colors duration-[160ms] ease-out hover:bg-white data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                    orientation="vertical"
                  >
                    <ScrollArea.Thumb className="flex-1 bg-teal-500 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                  </ScrollArea.Scrollbar>
                  <ScrollArea.Corner className="bg-white" />
                </ScrollArea.Root>
              )}
              {!showBins && (
                <div data-cy="info-card">
                  <InfoCard />
                </div>
              )}
              {showBins && (
                <div data-cy="search-results">
                  <BinAccordion bins={bins} />
                </div>
              )}
            </div>
          </div>
        </Tab.Panel>
      </Tab.Group>
    </div>
  );
}
