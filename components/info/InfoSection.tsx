import Image from "next/image";
import { Star, Users, User } from "lucide-react";
import Card from "./Card";
import MainButton from "../shared/MainButton";

export default function InfoSection() {
  return (
    <div className="bg-white rounded-2xl p-6 mx-auto">
      <div className="flex flex-col items-start text-left">
        <Image
          src="https://picsum.photos/200/200?random=1"
          alt="Hala Ahmed"
          width={100}
          height={90}
          className="rounded-md mb-1"
        />
        <h1 className="text-lg font-semibold mb-2">Hala Ahmed</h1>
        <p className="text-sm text-gray-600 mb-6 max-w-sm">
          I am Hala Ahmed, I am the owner of the local brand called Beauty which
          is for Makeup and Skin Care.
        </p>

        <div className="flex justify-center items-center flex-wrap gap-1 w-full mb-6">
          <Card
            icon={<User className="w-4 h-4 text-main-color" />}
            number={5}
            title="Following"
          />
          <Card
            icon={<Users className="w-4 h-4 text-main-color" />}
            number={20}
            title="Followers"
          />

          <Card
            icon={<Star className="w-4 h-4 text-main-color" />}
            number={4.2}
            title={
              <>
                Rate <span className="text-gray-400">(15)</span>
              </>
            }
          />
        </div>

        <MainButton>Follow</MainButton>
      </div>
    </div>
  );
}
