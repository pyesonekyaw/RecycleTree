export default function InfoCard() {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100">
      <h5 className="mb-2 text-2xl font-bold text-gray-900">
        Recycling Your Waste
      </h5>
      <p className="font-normal text-gray-700 py-5 text-justify">
        Enter your address in the search bar or click on the location button at
        the right of the search bar to find the recycling bins nearest to you.{" "}
      </p>

      <p className="font-normal text-gray-700 py-5 text-justify">
        Automatic detection of location requires Recycle Go Where to gain access
        to your current location information.
      </p>
      <p className="font-normal text-gray-700 py-5 text-justify">
        The radius of your search may be modified by using the slider located
        under the search bar.
      </p>
      <p className="font-normal text-gray-700 py-5 text-justify">
        Clicking on the postal code link of a bin will redirect you to Google
        Maps.
      </p>
      <p className="font-normal text-gray-700 py-5 text-justify">
        Looking at recycling bin feedback by other users provides more details
        on the recycling bin.
      </p>
      <p className="font-normal text-gray-700 py-5 text-justify">
        The user may also send their feedback by clicking on the ‘Yes’ or ‘No’
        buttons.
      </p>
    </div>
  );
}
