import * as Slider from "@radix-ui/react-slider";

export default function BinSlider(props) {
  return (
    <form>
      <Slider.Root
        className="relative flex items-center select-none touch-none  h-5"
        min={1}
        max={10}
        step={1}
        aria-label="Number"
        {...props}
      >
        <Slider.Track className="relative grow bg-emerald-300 rounded-full h-1">
          <Slider.Range className="absolute bg-emerald-600 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-emerald-600 rounded-full focus:outline-none" />
      </Slider.Root>
    </form>
  );
}
