import { useState } from "react";
import styles from "@/styles/ContactUspage.module.css";


export default function SendMessageForm ({apiKey}) {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    // console.log(formData, myForm)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => console.log(res))
      .catch((error) => alert(error));
  };

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
                // method="POST"
                onSubmit={handleSubmit}
                data-netlify="true"
                className="flex flex-col gap-y-5 lg:gap-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="">
                  <label>
                    <small> First name</small>
                    <input
                      type="text"
                      name="name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="rounded shadow py-2 text-black px-2 w-full mt-1"
                    />
                  </label>
                </div>
                <div className="">
                  <label>
                    <small> Last name </small>

                    <input
                      type="text"
                      name="last_name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="rounded shadow py-2 text-black px-2 w-full mt-1"
                    />
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
                      className="rounded shadow py-2 text-black px-2 w-full mt-1 "
                    />
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
                      className="rounded shadow py-2 text-black px-2 w-full mt-1"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <small>Message</small>

                    <textarea
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="rounded shadow py-2 text-black px-2 w-full mt-1 md:h-32"
                    ></textarea>
                  </label>
                </div>

                  <button
                    type="submit"
                    className={`${styles["contact-buttons-box-shadow"]} w-full rounded-lg shadow px-7 md:px-10  bg-[var(--yellow)] ${styles["send-message-button"]} py-3 font-bold uppercase`}
                  >
                    Send Message
                  </button>
                <div>
                  {success ? (
                    <h6 className="text-[var(--green)] text-center">Thank you for joining our waiting list!</h6>
                  ) : null
                  }
                
                </div>
              </form>
            </div>
    )
}