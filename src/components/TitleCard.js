import Lottie from "lottie-react";
import CanMehAnimation from "public/lottie/recycleCanMehLottie.json";
import HowAhAnimation from "public/lottie/recycleHowAhLottie.json";
import GoWhereAnimation from "public/lottie/recycleGoWhereLottie.json";

export default function TitleCard({ name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48">
        {name == "RecycleGoWhere" ? (
          <Lottie animationData={GoWhereAnimation} loop={false} />
        ) : name == "RecycleCanMeh" ? (
          <Lottie animationData={CanMehAnimation} loop={false} />
        ) : (
          <Lottie animationData={HowAhAnimation} loop={true} />
        )}
      </div>
      <div className="font-medium text-4xl mx-auto">
        <h1 className="text-black ">{name}</h1>
      </div>
    </div>
  );
}
