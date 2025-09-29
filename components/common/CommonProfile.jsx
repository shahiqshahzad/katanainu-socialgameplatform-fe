/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Cookies from "js-cookie";
import GalleryProfileTabs from "../GalleryProfileTabs";
import FollowDetailsWrapperCommon from "../FollowDetailsWrapperCommon";
import { editProfile, getSingleUser } from "../../utils/api/userModule";
import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from "next/router";
import { format, parseISO } from "date-fns";
import Image from "next/image";

const CommonProfile = ({ userId }) => {
  const router = useRouter();
  const { id } = router.query;
  const fileInput = useRef(null);
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const { data, isLoading } = getSingleUser(id);

  const [isUploading, setIsUploading] = useState(false);

  const { mutate } = editProfile({
    onSuccessCallback: () => setIsUploading(false),
    onErrorCallback: () => setIsUploading(false),
  });
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("profileImage", file);
    setIsUploading(true);
    await mutate(formData);
  };

  return (
    <div>
      <div className=" w-full mx-auto p-5 md:p-[12px_12px] lg:p-[16px_20px] bg-neutral-bg-03 ">
        <div className="md:flex items-center w-full">
          <div className="w-full">
            <div className=" w-full pb-6 sm:flex  sm:justify-between items-end mt-4 md:mt-0 px-[24px] border-b-[0.5px] border-[rgba(228,228,228,0.10)] pr-0 pl-0 lg:flex-col lg:items-start xl:flex-row xl:items-end md:gap-10 sm:flex-col sm:items-start sm:gap-10">
              <div
                className="flex md:w-[124px] whitespace-nowrap justify-center md:flex md:justify-start flex-nowrap md:mr-6 sm:mr-0 relative"
                disabled={id !== user?._id}
              >
                <div className="w-full flex justify-center">
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    {data?.data?.profileImage ? (
                      <div>
                        {isUploading && (
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              zIndex: 10,
                            }}
                          >
                            <svg
                              className="animate-spin h-8 w-8 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-60"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="#D136F6"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="#6D5DD3"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                              ></path>
                            </svg>
                          </div>
                        )}
                        <div className="w-[124px] h-[124px] rounded-full overflow-hidden bg-[#201F25]">
                          <Image
                            src={data?.data?.profileImage}
                            alt="profile img"
                            height={124}
                            width={124}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        {isUploading && (
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              zIndex: 10,
                            }}
                          >
                            <svg
                              className="animate-spin h-8 w-8 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-60"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="#D136F6"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="#6D5DD3"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                              ></path>
                            </svg>
                          </div>
                        )}
                        <div className="w-[124px] h-[124px] rounded-full overflow-hidden bg-[#201F25]">
                          <Image
                            src="/images/home/user.svg"
                            alt="profile img"
                            height={124}
                            width={124}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    )}
                    <input
                      type="file"
                      name="file"
                      accept="image/*"
                      className="hidden"
                      ref={fileInput}
                      onChange={handleFileChange}
                      disabled={id !== user?._id}
                    />
                    <span className="top-0 right-4 absolute  w-3.5 h-3.5   rounded-full">
                      <button
                        type="button"
                        onClick={() => fileInput.current.click()}
                        className="w-7 h-7 flex items-center justify-center rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #D136F6, #6C5DD3)",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.213l-4.5 1.5 1.5-4.5L16.862 3.487z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:mt-0 mt-5 ">
                <h1 className=" flex justify-center sm:block font-bebas-neue font-normal text-[28px] xl:text-[32px] text-[#F0F2FD] leading-[32px] tracking-[0.5px] whitespace-nowrap  ">
                  {data?.data?.name}
                </h1>
                <p className="font-satoshi-medium mt-2 font-medium text-[15px] text-neutral-tertiary leading-[16px] text-center md:text-left">
                  @{data?.data?.userName}
                </p>

                <div className="grid grid-cols-2 items-center mt-6  md:flex">
                  <div className="flex items-center mr-10">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="#252134" />
                      <path
                        d="M10.8695 9.8069C12.2303 8.44612 14.0759 7.68164 16.0003 7.68164C17.9248 7.68164 19.7704 8.44612 21.1312 9.8069C22.492 11.1677 23.2564 13.0133 23.2564 14.9377C23.2564 16.8622 22.492 18.7078 21.1312 20.0686L20.142 21.0469C19.4128 21.7619 18.467 22.6819 17.3037 23.8069C16.954 24.145 16.4867 24.334 16.0003 24.334C15.514 24.334 15.0467 24.145 14.697 23.8069L11.7878 20.9769C11.422 20.6177 11.1162 20.3152 10.8695 20.0686C10.1957 19.3948 9.66118 18.5949 9.29651 17.7145C8.93184 16.8342 8.74414 15.8906 8.74414 14.9377C8.74414 13.9848 8.93184 13.0413 9.29651 12.1609C9.66118 11.2806 10.1957 10.4807 10.8695 9.8069ZM20.247 10.6902C19.1205 9.56395 17.5927 8.9313 15.9998 8.93145C14.4068 8.93161 12.8791 9.56456 11.7528 10.6911C10.6266 11.8176 9.9939 13.3454 9.99406 14.9383C9.99422 16.5313 10.6272 18.0589 11.7537 19.1852L12.992 20.4086C13.8474 21.2444 14.7052 22.0777 15.5653 22.9086C15.6819 23.0213 15.8377 23.0844 15.9999 23.0844C16.1621 23.0844 16.3179 23.0213 16.4345 22.9086L19.2628 20.1586C19.6545 19.7744 19.982 19.4502 20.2462 19.1852C21.3724 18.0589 22.0051 16.5314 22.0051 14.9386C22.0051 13.3458 21.3724 11.8182 20.2462 10.6919L20.247 10.6902ZM16.0003 12.6661C16.3289 12.6661 16.6542 12.7308 16.9577 12.8565C17.2612 12.9822 17.537 13.1665 17.7693 13.3988C18.0016 13.6311 18.1859 13.9069 18.3116 14.2104C18.4373 14.5139 18.502 14.8392 18.502 15.1677C18.502 15.4963 18.4373 15.8216 18.3116 16.1251C18.1859 16.4286 18.0016 16.7044 17.7693 16.9367C17.537 17.169 17.2612 17.3533 16.9577 17.479C16.6542 17.6047 16.3289 17.6694 16.0003 17.6694C15.3449 17.6574 14.7203 17.3887 14.261 16.9209C13.8017 16.4531 13.5443 15.8237 13.5443 15.1682C13.5443 14.5126 13.8017 13.8832 14.261 13.4154C14.7203 12.9476 15.3449 12.6789 16.0003 12.6669V12.6661ZM16.0003 13.9161C15.836 13.9161 15.6732 13.9484 15.5214 14.0113C15.3695 14.0742 15.2315 14.1664 15.1153 14.2827C14.9991 14.3989 14.9069 14.5369 14.844 14.6887C14.7811 14.8406 14.7487 15.0034 14.7487 15.1677C14.7487 15.3321 14.7811 15.4949 14.844 15.6467C14.9069 15.7986 14.9991 15.9366 15.1153 16.0528C15.2315 16.169 15.3695 16.2612 15.5214 16.3241C15.6732 16.387 15.836 16.4194 16.0003 16.4194C16.3322 16.4194 16.6505 16.2876 16.8851 16.0529C17.1198 15.8183 17.2516 15.5 17.2516 15.1682C17.2516 14.8363 17.1198 14.518 16.8851 14.2834C16.6505 14.0487 16.3322 13.9169 16.0003 13.9169V13.9161Z"
                        fill="#ADA8C4"
                      />
                    </svg>

                    <p className="ml-2 font-satoshi-medium font-medium text-[14px] text-neutral-tertiary leading-[16px]">
                      {data?.data?.city}
                    </p>
                  </div>
                  <div className="flex items-center mr-10">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="#252134" />
                      <path
                        d="M16 7.66589C20.6034 7.66589 24.335 11.3976 24.335 16.0009C24.335 20.6034 20.6034 24.3351 16 24.3351C11.3967 24.3351 7.66504 20.6034 7.66504 16.0009C7.66504 11.3976 11.3967 7.66589 16 7.66589ZM18.4492 19.7501H13.55C14.0934 21.7617 15.0384 23.0851 15.9992 23.0851C16.96 23.0851 17.905 21.7617 18.4484 19.7501H18.4492ZM12.2575 19.7501H9.98754C10.7921 21.0375 11.9877 22.0336 13.3992 22.5926C12.9642 21.9092 12.605 21.0542 12.3409 20.0801L12.2559 19.7509L12.2575 19.7501ZM22.0117 19.7501H19.7434C19.4734 20.8626 19.0834 21.8334 18.5992 22.5926C19.9216 22.0695 21.0566 21.1618 21.8575 19.9867L22.0117 19.7501ZM11.9117 14.3334H9.11254L9.10837 14.3476C8.97908 14.8892 8.91391 15.4441 8.91421 16.0009C8.91421 16.8809 9.07504 17.7234 9.36837 18.5009H12.0125C11.8113 17.1212 11.7769 15.7222 11.91 14.3342L11.9117 14.3334ZM18.8309 14.3334H13.1692C13.0226 15.7212 13.0604 17.1222 13.2817 18.5001H18.7184C18.9396 17.1222 18.9774 15.7212 18.8309 14.3334ZM22.8875 14.3334H20.0892C20.1409 14.8726 20.1684 15.4309 20.1684 16.0001C20.1697 16.8367 20.109 17.6724 19.9867 18.5001H22.6309C22.9317 17.7009 23.0853 16.8539 23.0842 16.0001C23.0842 15.4259 23.0159 14.8667 22.8875 14.3334ZM13.4 9.40839L13.3809 9.41506C11.6754 10.0961 10.2996 11.4106 9.54171 13.0834H12.0817C12.3434 11.6234 12.7975 10.3517 13.4 9.40839ZM16 8.91589L15.9034 8.92006C14.85 9.01673 13.83 10.6851 13.3584 13.0834H18.6434C18.1717 10.6917 17.1575 9.02589 16.1059 8.92089L16 8.91589ZM18.6 9.40756L18.6892 9.55339C19.2467 10.4801 19.67 11.6967 19.9184 13.0842H22.4584C21.7349 11.4876 20.4472 10.2145 18.8425 9.50923L18.6 9.40756Z"
                        fill="#ADA8C4"
                      />
                    </svg>

                    <p className="ml-2 font-satoshi-medium font-medium text-[14px] text-neutral-tertiary leading-[16px]">
                      Kainu.com
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="#252134" />
                      <path
                        d="M20.7917 8.5C21.51 8.5 22.1988 8.78534 22.7067 9.29325C23.2147 9.80116 23.5 10.49 23.5 11.2083V20.7917C23.5 21.51 23.2147 22.1988 22.7067 22.7067C22.1988 23.2147 21.51 23.5 20.7917 23.5H11.2083C10.49 23.5 9.80116 23.2147 9.29325 22.7067C8.78534 22.1988 8.5 21.51 8.5 20.7917V11.2083C8.5 10.49 8.78534 9.80116 9.29325 9.29325C9.80116 8.78534 10.49 8.5 11.2083 8.5H20.7917ZM22.25 13.0833H9.75V20.7917C9.75 21.5967 10.4033 22.25 11.2083 22.25H20.7917C21.1784 22.25 21.5494 22.0964 21.8229 21.8229C22.0964 21.5494 22.25 21.1784 22.25 20.7917V13.0833ZM12.4583 18.0833C12.7346 18.0833 12.9996 18.1931 13.1949 18.3884C13.3903 18.5838 13.5 18.8487 13.5 19.125C13.5 19.4013 13.3903 19.6662 13.1949 19.8616C12.9996 20.0569 12.7346 20.1667 12.4583 20.1667C12.1821 20.1667 11.9171 20.0569 11.7218 19.8616C11.5264 19.6662 11.4167 19.4013 11.4167 19.125C11.4167 18.8487 11.5264 18.5838 11.7218 18.3884C11.9171 18.1931 12.1821 18.0833 12.4583 18.0833ZM16 18.0833C16.2763 18.0833 16.5412 18.1931 16.7366 18.3884C16.9319 18.5838 17.0417 18.8487 17.0417 19.125C17.0417 19.4013 16.9319 19.6662 16.7366 19.8616C16.5412 20.0569 16.2763 20.1667 16 20.1667C15.7237 20.1667 15.4588 20.0569 15.2634 19.8616C15.0681 19.6662 14.9583 19.4013 14.9583 19.125C14.9583 18.8487 15.0681 18.5838 15.2634 18.3884C15.4588 18.1931 15.7237 18.0833 16 18.0833ZM12.4583 14.75C12.7346 14.75 12.9996 14.8597 13.1949 15.0551C13.3903 15.2504 13.5 15.5154 13.5 15.7917C13.5 16.0679 13.3903 16.3329 13.1949 16.5282C12.9996 16.7236 12.7346 16.8333 12.4583 16.8333C12.1821 16.8333 11.9171 16.7236 11.7218 16.5282C11.5264 16.3329 11.4167 16.0679 11.4167 15.7917C11.4167 15.5154 11.5264 15.2504 11.7218 15.0551C11.9171 14.8597 12.1821 14.75 12.4583 14.75ZM16 14.75C16.2763 14.75 16.5412 14.8597 16.7366 15.0551C16.9319 15.2504 17.0417 15.5154 17.0417 15.7917C17.0417 16.0679 16.9319 16.3329 16.7366 16.5282C16.5412 16.7236 16.2763 16.8333 16 16.8333C15.7237 16.8333 15.4588 16.7236 15.2634 16.5282C15.0681 16.3329 14.9583 16.0679 14.9583 15.7917C14.9583 15.5154 15.0681 15.2504 15.2634 15.0551C15.4588 14.8597 15.7237 14.75 16 14.75ZM19.5417 14.75C19.8179 14.75 20.0829 14.8597 20.2782 15.0551C20.4736 15.2504 20.5833 15.5154 20.5833 15.7917C20.5833 16.0679 20.4736 16.3329 20.2782 16.5282C20.0829 16.7236 19.8179 16.8333 19.5417 16.8333C19.2654 16.8333 19.0004 16.7236 18.8051 16.5282C18.6097 16.3329 18.5 16.0679 18.5 15.7917C18.5 15.5154 18.6097 15.2504 18.8051 15.0551C19.0004 14.8597 19.2654 14.75 19.5417 14.75ZM20.7917 9.75H11.2083C10.8216 9.75 10.4506 9.90365 10.1771 10.1771C9.90365 10.4506 9.75 10.8216 9.75 11.2083V11.8333H22.25V11.2083C22.25 10.8216 22.0964 10.4506 21.8229 10.1771C21.5494 9.90365 21.1784 9.75 20.7917 9.75Z"
                        fill="#ADA8C4"
                      />
                    </svg>

                    <p className="font-satoshi-medium font-medium text-[14px] text-neutral-tertiary leading-[16px] ml-2">
                      Gamer Since{" "}
                      {data?.data?.createdAt &&
                        format(parseISO(data?.data?.createdAt), "yyyy")}
                    </p>
                  </div>
                </div>
              </div>
              <FollowDetailsWrapperCommon data={data} />
            </div>

            <div className="overflow-hidden w-full pt-4 pb-3 ">
              <p className="font-satoshi-medium md:w-[592px] font-medium text-[14px] text-neutral-tertiary leading-[24px] w-full">
                I’m always looking for new games to play and new people to meet.
                Also passionate about gaming and I love to talk about it with
                others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonProfile;
