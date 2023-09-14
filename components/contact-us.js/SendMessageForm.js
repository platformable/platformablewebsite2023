import React, { useEffect, useState } from "react";
// import { Resend } from "resend";
import styles from "@/styles/ContactUspage.module.css";
import { useRouter } from "next/router";

// const resendApiKey = "re_Hs5DscfK_HfNQyd1bqJueYjJ8QNRUcRFP";

export default function SendMessageForm({ apiKey }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(null);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const router = useRouter();

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const handleError = () => {
    const newErrors = {};
    if (firstName.trim() === "") {
      newErrors.firstName = "Please fill in required field";
    }
    if (lastName.trim() === "") {
      newErrors.lastName = "Please fill in required field";
    }
    if (email === "") {
      newErrors.email = "Please fill in required field";
    }
    if (subject.trim() === "") {
      newErrors.subject = "Please fill in required field";
    }
    if (message.trim() === "") {
      newErrors.message = "Please fill in required field";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; //an array of keys and its length
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSendMessage = () => {
    if (!handleError()) {
      return;
    }

    if (handleError()) {
      setLoading(false);
      setSuccess(false);
    }
    // setLoading(true);

    // // Simulate a delay for demonstration purposes (remove in production)
    // setTimeout(() => {
    //   setLoading(false);
    //   setSuccess(true);
    //   resetForm();
    // }, 3000);
  };
  // const handleSubmit = (event) => {
  //   console.log("dispara evento");
  //   // const myForm = event.target;
  //   // const formData = new FormData(myForm);
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     // body: new URLSearchParams(formData).toString(),
  //     body: encode({
  //       "form-name": "contact",
  //       firstName,
  //       lastName,
  //       email,
  //       subject,
  //       message,
  //     }),
  //   })
  //     .then((res) => console.log(res))
  //     .catch((error) => alert(error));
  // };

  // const handleSubmit = async (event) => {
  //   if (!handleError()) {
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const response = await fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encode({
  //         "form-name": "contact",
  //         firstName,
  //         lastName,
  //         email,
  //         subject,
  //         message,
  //       }),
  //     });

  //     if (response.ok) {
  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setSuccess(true);
  //       setTimer(
  //         setTimeout(() => {
  //           //after the 3 seconds have passed
  //           setLoading(false);
  //         }, 8000) // 3000 milliseconds which means (3 seconds)
  //       );
  //     } else {
  //       let errorData = await response.json();
  //       console.log(errorData);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     // Handle the error, e.g., display an error message
  //     console.error("Error:", error);
  //     setLoading(false);
  //   }
  // };

  // const handleCompleteSubmission = async (e) => {
  //   e.preventDefault();
  //   handleError();
  //   handleSubmit();
  // };

  return (
    <div className="message-form bg-[var(--purple-dark)] px-3 md:px-10 lg:px-8 py-10  ">
      {/* {success ? (
                <h4 className="font-bold mb-5">
                  Thank you for joining our waiting list!
                </h4>
              ) : (
                <h4 className="font-bold mb-5">Leave us a message</h4>
              )} */}
      <h6 className="font-bold mb-5">Leave us a message</h6>

      {/* Form 2 */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        // data-netlify-success="/success-page"
        //action="/pages/success"
        // onSubmit={handleCompleteSubmission}
        className="flex flex-col gap-y-5 lg:gap-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="">
          <label>
            <small> First name</small>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={
                errors.firstName
                  ? " border-red-600 border-2 border-opacity-50 rounded shadow py-2 text-black px-2 w-full mt-1"
                  : " border-none border-2 border-opacity-50  rounded shadow py-2 text-black px-2 w-full mt-1"
              }
            />
            {errors.firstName && (
              <p className="text-sm ml-1 text-red-500">{errors.firstName}</p>
            )}
          </label>
        </div>
        <div className="">
          <label>
            <small> Last name </small>

            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              // className="rounded shadow py-2 text-black px-2 w-full mt-1"
              className={
                errors.lastName
                  ? " border-red-600 border-2 border-opacity-50 rounded shadow py-2 text-black px-2 w-full mt-1"
                  : " border-none border-2 border-opacity-50  rounded shadow py-2 text-black px-2 w-full mt-1"
              }
            />
            {errors.lastName && (
              <p className="text-sm ml-1 text-red-500">{errors.lastName}</p>
            )}
          </label>
        </div>
        <div className="">
          <label>
            <small>Your Email</small>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                errors.email
                  ? " rounded shadow py-2  px-2 w-full mt-1 border-red-600 border-2 border-opacity-50 text-black "
                  : " rounded shadow py-2  px-2 w-full mt-1 border-none border-2 border-opacity-50 text-black "
              }
            />
            {errors.email && (
              <p className="text-sm ml-1 text-red-500">{errors.email}</p>
            )}
          </label>
        </div>
        <div className="">
          <label>
            <small>Subject</small>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={
                errors.subject
                  ? " border-red-600 border-2 border-opacity-50 rounded shadow py-2 text-black px-2 w-full mt-1"
                  : " border-none border-2 border-opacity-50  rounded shadow py-2 text-black px-2 w-full mt-1"
              }
            />
          </label>
          {errors.subject && (
            <p className="text-sm ml-1 text-red-500">{errors.subject}</p>
          )}
        </div>
        <div>
          <label>
            <small>Message</small>

            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={
                errors.message
                  ? " border-red-600 border-2 border-opacity-50 rounded shadow py-2 text-black px-2 w-full mt-1 md:h-32 "
                  : " border-none border-2 border-opacity-50 rounded shadow py-2 text-black px-2 w-full mt-1 md:h-32 "
              }
            ></textarea>
          </label>
          {errors.message && (
            <p className="text-sm ml-1 text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`${styles["contact-buttons-box-shadow"]} w-full rounded-lg shadow px-7 md:px-10  bg-[var(--yellow)] ${styles["send-message-button"]} py-3 font-bold uppercase`}
          disabled={loading} // Disable the button while loading
          onClick={handleSendMessage}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        <div>
          {success ? (
            <h6 className="text-white text-center">
              Thank you for your message!
            </h6>
          ) : null}
        </div>
      </form>
    </div>
  );
}

//Resend api fetch

// const handleSubmit = async (e) => {
//   const data = {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     subject: subject,
//     message: message,
//   };

//   try {
//     const response = await fetch("/api/send", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${resendApiKey}`,
//       },
//       body: JSON.stringify(data),
//     });
//     if (response.ok) {
//       // Email sent successfully
//       console.log("Email sent successfully", response);
//     } else {
//       // Handle error if the email failed to send
//       console.error("Email sending failed");
//     }
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };
