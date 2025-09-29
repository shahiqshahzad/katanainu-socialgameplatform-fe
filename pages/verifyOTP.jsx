import { Formik } from "formik";
import { otpValidationSchema } from "../utils/validationSchemas";
import { verifyOtpMutation } from "../utils/api/authModule";
import { Loader } from "../components/common/Icons";
import Cookies from "js-cookie";
import { useEmail } from "../store/store";
import { useRouter } from "next/router";

export default function VerifyOTP() {
  const verifyOTP = verifyOtpMutation();
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const { email } = useEmail();
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-fit my-5 md:my-0 md:h-screen">
      <div className="bg-gray-600 w-fit p-4 md:p-8 rounded-lg font-satoshi-regular relative">
        <Formik
          initialValues={{
            email: user?.email || email,
            otp: "",
          }}
          validationSchema={otpValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            verifyOTP.mutate(values);
            if (verifyOTP.isError) {
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <label htmlFor="name" className="text-white">
                  Email
                </label>{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={user?.email || email}
                  disabled
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-60 md:w-96 block text-white"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="name" className="text-white">
                  OTP
                </label>{" "}
                <br />
                <input
                  type="password"
                  name="otp"
                  placeholder="Enter OTP"
                  onChange={handleChange("otp")}
                  onBlur={handleBlur}
                  value={values.otp}
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-60 md:w-96 block text-white"
                />
                <p className="text-red-400">
                  {errors.otp && touched.otp && errors.otp}
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={verifyOTP.isPending}
                  className="px-8 py-2 border rounded-lg mt-5 text-white"
                >
                  Verify
                </button>
              </div>
            </form>
          )}
        </Formik>
        {verifyOTP.isPending && (
          <div className="absolute right-0 top-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
            <Loader color="#faf089" />
          </div>
        )}
      </div>
    </div>
  );
}
