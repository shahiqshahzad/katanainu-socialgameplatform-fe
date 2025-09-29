"use client";

import Image from "next/image";
// import { Trophy } from "lucide-react";

export default function UpcomingTornaments() {
  return (
    <div className="min-h-screen text-white mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            UPCOMING <span className="text-purple-500">TOURNAMENT</span>
          </h2>
          <button className="text-sm hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {/* APEX LEGENDS Card */}
          <div className="bg-[#111116] rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=192&width=384"
                alt="APEX LEGENDS"
                width={384}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-purple-500 text-white py-1 px-3 rounded-full flex items-center text-sm">
                {/* <Trophy className="w-4 h-4 mr-1" /> PRIZE: $200 */}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20" />
              <div className="absolute bottom-3 left-3">
                <h3 className="text-3xl font-bold tracking-wider">
                  APEX LEGENDS
                </h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 9.09H20.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Starts: 05/05/24, 12:00
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59 18.31 9.35 16.94 9.59"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.97 7.16C6.03 7.15 6.1 7.15 6.16 7.16C7.54 7.11 8.64 5.98 8.64 4.58C8.64 3.15 7.49 2 6.06 2C4.63 2 3.48 3.16 3.48 4.58C3.49 5.98 4.59 7.11 5.97 7.16Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59 5.66 9.35 7.03 9.59"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.33 13.45 9.33 12.05C9.33 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.09 17.78C7.68 18.72 7.68 20.26 9.09 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.09 17.78Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                1v1 •
                <div className="flex -space-x-2 ml-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-green-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-red-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-purple-500 border border-[#111116]"></div>
                </div>
                <span className="ml-2">112+ Joined</span>
              </div>
              <div className="pt-2">
                <div className="relative w-full h-1 bg-gray-800 rounded-full">
                  <div className="absolute left-0 top-0 h-1 w-1/3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                  <div className="absolute left-1/3 top-0 w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/4"></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 text-right">
                  12 Days Left
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="text-gray-400">
                  Entry: <span className="text-white">Free</span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-8 rounded-md transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* COD MOBILE 3 Card */}
          <div className="bg-[#111116] rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=192&width=384"
                alt="COD MOBILE 3"
                width={384}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-purple-500 text-white py-1 px-3 rounded-full flex items-center text-sm">
                {/* <Trophy className="w-4 h-4 mr-1" /> PRIZE: $200 */}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20" />
              <div className="absolute bottom-3 left-3">
                <h3 className="text-3xl font-bold tracking-wider">
                  COD MOBILE 3
                </h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 9.09H20.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Starts: 05/05/24, 12:00
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59 18.31 9.35 16.94 9.59"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.97 7.16C6.03 7.15 6.1 7.15 6.16 7.16C7.54 7.11 8.64 5.98 8.64 4.58C8.64 3.15 7.49 2 6.06 2C4.63 2 3.48 3.16 3.48 4.58C3.49 5.98 4.59 7.11 5.97 7.16Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59 5.66 9.35 7.03 9.59"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.33 13.45 9.33 12.05C9.33 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.09 17.78C7.68 18.72 7.68 20.26 9.09 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.09 17.78Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                1v1 •
                <div className="flex -space-x-2 ml-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-green-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-red-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-purple-500 border border-[#111116]"></div>
                </div>
                <span className="ml-2">112+ Joined</span>
              </div>
              <div className="pt-2">
                <div className="relative w-full h-1 bg-gray-800 rounded-full">
                  <div className="absolute left-0 top-0 h-1 w-1/3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                  <div className="absolute left-1/3 top-0 w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/4"></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 text-right">
                  12 Days Left
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="text-gray-400">
                  Entry: <span className="text-white">Free</span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-8 rounded-md transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* FIFA 23 Card */}
          <div className="bg-[#111116] rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=192&width=384"
                alt="FIFA 23"
                width={384}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-purple-500 text-white py-1 px-3 rounded-full flex items-center text-sm">
                {/* <Trophy className="w-4 h-4 mr-1" /> PRIZE: $200 */}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20" />
              <div className="absolute bottom-3 left-3">
                <h3 className="text-3xl font-bold tracking-wider">FIFA 23</h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 9.09H20.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Starts: 05/05/24, 12:00
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59 18.31 9.35 16.94 9.59"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.97 7.16C6.03 7.15 6.1 7.15 6.16 7.16C7.54 7.11 8.64 5.98 8.64 4.58C8.64 3.15 7.49 2 6.06 2C4.63 2 3.48 3.16 3.48 4.58C3.49 5.98 4.59 7.11 5.97 7.16Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59 5.66 9.35 7.03 9.59"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.33 13.45 9.33 12.05C9.33 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.09 17.78C7.68 18.72 7.68 20.26 9.09 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.09 17.78Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                1v1 •
                <div className="flex -space-x-2 ml-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-green-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-red-500 border border-[#111116]"></div>
                  <div className="w-5 h-5 rounded-full bg-purple-500 border border-[#111116]"></div>
                </div>
                <span className="ml-2">112+ Joined</span>
              </div>
              <div className="pt-2">
                <div className="relative w-full h-1 bg-gray-800 rounded-full">
                  <div className="absolute left-0 top-0 h-1 w-1/3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                  <div className="absolute left-1/3 top-0 w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/4"></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 text-right">
                  12 Days Left
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="text-gray-400">
                  Entry: <span className="text-white">Free</span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-8 rounded-md transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
