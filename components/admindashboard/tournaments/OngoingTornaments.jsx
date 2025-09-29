import Image from "next/image";
import Link from "next/link";
import { LuCalendarDays } from "react-icons/lu";

export default function OngoingTornaments() {
  return (
    <div className=" text-white ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            <span className="text-white">ONGOING</span>{" "}
            <span className="text-purple-500">TOURNAMENT</span>
          </h2>
          <Link href="#" className="text-sm text-white hover:text-purple-400">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Call of Duty Card */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/cardImage.png"
                alt="Call of Duty Modern Warfare 3"
                width={400}
                height={200}
                className="w-full h-[150px] object-cover"
              />
              <div className="absolute top-[1px] right-[1px] bg-purple-600 text-white text-xs px-3 py-3  flex items-center rounded-bl-[8px]">
                {/* <Trophy class Name="w-3 h-3 mr-1" /> */}
                PRIZE: $200
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold uppercase mb-1">
                Call of Duty Modern Warfare 3
              </h3>
              <div className="flex items-center text-gray-400 text-xs mb-2">
                <LuCalendarDays size={18} />
                <span className="mx-1">Starts:</span>
                <span>05/05/24, 12:00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xs text-gray-400 mr-2">1v1</span>
                  <span className="text-gray-400 mx-1">•</span>
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 rounded-full border border-gray-800 ${
                          [
                            "bg-red-500",
                            "bg-blue-500",
                            "bg-green-500",
                            "bg-yellow-500",
                            "bg-purple-500",
                          ][i]
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-400">12+ Joined</span>
              </div>
            </div>
          </div>

          {/* PUBG Card */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="http://10.3.1.147:7001/api/v1/uploads/1744717342100-images.jpg"
                alt="Player Unknown Battlegrounds"
                width={400}
                height={200}
                className="w-full h-[150px] object-cover"
              />
              <div className="absolute top-[1px] right-[1px] bg-purple-600 text-white text-xs px-3 py-3  flex items-center rounded-bl-[8px]">
                PRIZE: $200
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold uppercase mb-1">
                Player Unknown
              </h3>
              <div className="flex items-center text-gray-400 text-xs mb-2">
                <span className="mr-1">Starts:</span>
                <span>05/05/24, 12:00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xs text-gray-400 mr-2">1v1</span>
                  <span className="text-gray-400 mx-1">•</span>
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 rounded-full border border-gray-800 ${
                          [
                            "bg-orange-500",
                            "bg-teal-500",
                            "bg-pink-500",
                            "bg-indigo-500",
                            "bg-amber-500",
                          ][i]
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-400">12+ Joined</span>
              </div>
            </div>
          </div>

          {/* Valorant Card */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="http://10.3.1.147:7001/api/v1/uploads/1744717342100-images.jpg"
                alt="Valorant Championship"
                width={400}
                height={200}
                className="w-full h-[150px] object-cover"
              />
              <div className="absolute top-[-1px] right-[-1px] bg-purple-600 text-white text-xs px-3 py-3  flex items-center rounded-bl-[8px]">
                PRIZE: $200
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold uppercase mb-1">
                Valorant Championship
              </h3>
              <div className="flex items-center text-gray-400 text-xs mb-2">
                <span className="mr-1">Starts:</span>
                <span>05/05/24, 12:00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xs text-gray-400 mr-2">1v1</span>
                  <span className="text-gray-400 mx-1">•</span>
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 rounded-full border border-gray-800 ${
                          [
                            "bg-red-500",
                            "bg-green-500",
                            "bg-blue-500",
                            "bg-yellow-500",
                            "bg-purple-500",
                          ][i]
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-400">12+ Joined</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
