import { useState } from "react";
import styles from "@/styles/ContactUspage.module.css";

export default function BecomePartnerForm({ apiKey }) {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryAddress, setCountryAddress] = useState("");
  const [countryAddresError, setCountryAddresError] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleError = () => {
    if (firstName.trim() === "") {
      setFirstNameError("Please fill in required field");
    }
    if (lastName.trim() === "") {
      setLastNameError("Please fill in required field");
    }
    if (email === "") {
      setEmailError("Please fill in required field");
    }
    if (countryAddress.trim() === "") {
      setCountryAddresError("Please fill in required field");
    }
  };

  async function joinWaitingList(event) {
    setSubmissionMessage("");
    try {
      if (!firstName || !lastName || !email || !countryAddress) {
        throw new Error("All fields are required");
      }

      let response = await fetch(`/api/partnerswaitinglist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ name: firstName, last_name: lastName, email, country: countryAddress }),
      });

      if (response.ok) {
        setFirstNameError("")
        setLastNameError("")
        setEmailError("")
        setCountryAddresError("")


        setFirstName("");
        setLastName("");
        setEmail("");
        setCountryAddress("")
        setSubmissionMessage("Thank you for becoming a partner! Please check your email and confirm your address");
      } 
      // else {
      //   let errorData = await response.json();
      //   return errorData;
      // }
    } catch (error) {
      // setSubmissionMessage(error.message);
      console.log(`${error}`);
    } 
  }

  const handleCompleteSubmission = async (e) => {
    e.preventDefault();
    handleError();
    joinWaitingList();
  };

  return (
    <div
      id="left-column"
      className="lg:w-[70%] justify-self-end px-3 md:px-10 lg:px-8 py-10 bg-gradient-to-b from-[var(--purple-medium)] to-[#301BBD] rounded-xl"
    >
      {/* <h6 className="font-bold mb-5 text-white">Join the waiting list</h6> */}

      <form
        name="join-waiting-list"
        method="POST"
        onSubmit={handleCompleteSubmission}
        className="flex flex-col gap-y-5 lg:gap-y-6"
      >
        <div className="">
          <label>
            <small className="text-white"> First name</small>

            <input
              type="text"
              name="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              // className="rounded shadow py-2 text-black px-2 w-full mt-1"
              className={
                firstNameError
                  ? "border-red-600 border-2 border-opacity-50 rounded shadow py-2 text-black px-2 w-full mt-1"
                  : "rounded shadow py-2 text-black px-2 w-full mt-1"
              }
            />
          </label>
          {firstNameError && (
            <p className="text-sm ml-1 text-red-500">{firstNameError}</p>
          )}
        </div>
        <div className="">
          <label>
            <small className="text-white"> Last name </small>

            <input
              type="text"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={
                lastNameError
                  ? "border-red-600 border-2 border-opacity-50 rounded shadow py-2 text-black px-2 w-full mt-1"
                  : "rounded shadow py-2 text-black px-2 w-full mt-1"
              }
            />
          </label>
          {lastNameError && (
            <p className="text-sm ml-1 text-red-500">{lastNameError}</p>
          )}
        </div>
        <div>
          <label>
            <small className="text-white">Email address</small>

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                emailError
                  ? "border-red-600 border-2 border-opacity-50 rounded shadow py-2 text-black px-2 w-full mt-1"
                  : "rounded shadow py-2 text-black px-2 w-full mt-1"
              }
            />
          </label>
          {emailError && (
            <p className="text-sm ml-1 text-red-500">{emailError}</p>
          )}
        </div>
        <div className="">
          <label>
            <small className="text-white">Enter your country</small>

            <input
              type="text"
              name="countryAddress"
              value={countryAddress}
              onChange={(e) => setCountryAddress(e.target.value)}
              // className="rounded shadow py-2 text-black px-2 w-full mt-1"
              className={
                countryAddresError
                  ? "border-red-600 border-2 border-opacity-50 rounded shadow py-2 text-black px-2 w-full mt-1"
                  : "rounded shadow py-2 text-black px-2 w-full mt-1"
              }
            />
          </label>
          {countryAddresError && (
            <p className="text-sm ml-1 text-red-500">{countryAddresError}</p>
          )}
        </div>

        {submissionMessage ? (
          <h6 className="text-center text-[var(--yellow)]">{submissionMessage}</h6>
        ) : (
          <button
            type="submit"
            className={` ${styles["contact-buttons-box-shadow"]} bg-[var(--pink)] px-7 py-2 text-white font-medium  rounded-xl  lg:py-4 lg:px-0`}
          >
            Apply for the Program Now
          </button>
        )}
      </form>
    </div>
  );
}
