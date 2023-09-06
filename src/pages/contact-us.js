import Layout from "../../components/Layout";
import styles from "@/styles/ContactUspage.module.css";
import Meta from "../../components/Meta";
import { InlineWidget } from "react-calendly";
import React, { useState } from "react";

export default function ContactUs({ data, posts }) {
  //   console.log("data", data);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const [clicked, setClicked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  async function joinWaitingList(event) {
    event.preventDefault();
    try {
      let response = await fetch(`/api/waitinglist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ name: firstName, last_name: lastName, email }),
      });

      if (response.ok) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setSuccess(true);
      } else {
        let errorData = await response.json();
        return errorData;
      }
    } catch (error) {
      return `Error: ${error}`;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => console.log(res))
      .catch((error) => alert(error));
  };
  return (
    <Layout>
      {/* <Meta title={data?.title} data={data} /> */}
      <section className={`bg-[#7D43FF]`}>
        <div className="text-white container mx-auto pt-10 pb-16">
          <h1 className="mb-5 font-bold">{data?.title || "Contact us"}</h1>
          <div className="wrapper grid lg:grid-cols-[1fr_1fr_1fr] grid-cols-1">
            
            
            <div id="left-column" className="px-3 md:px-10 lg:px-8 py-10 bg-[var(--purple-medium)] rounded-tl-lg">

            <h6 className="font-bold mb-5">Join the waiting list</h6>
            
           
              <form
                name="join-waiting-list"
                method="POST"
                onSubmit={joinWaitingList}
                className="flex flex-col gap-y-7 lg:gap-y-8"
              >
                <div className="grid gap-5">
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
                </div>
                <div>
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

                <button
                        type="submit"
                        className={` ${styles["contact-buttons-box-shadow"]} bg-[var(--pink)] px-7 py-2 text-white font-medium  rounded-xl  lg:py-4 lg:px-0`}
                      >
                        JOIN NOW
                      </button>

                <div>
                  {success ? (
                    <h6>Thank you for joining our waiting list!</h6>
                  ) : null
                  }
                
                </div>

       
              </form>
              
            </div>




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
                // onSubmit={handleSubmit}
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid  gap-5 ">
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
                <div className="mt-6">
                  <label>
                    <small>Subject</small>
                    <input
                      type="text"
                      name="subject"
                      className="rounded shadow py-2 text-black px-2 w-full mt-1 mb-4"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <small>Message</small>

                    <textarea
                      name="message"
                      
                      className="rounded shadow py-2 text-black px-2 w-full mt-1 md:h-32"
                    ></textarea>
                  </label>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    
                    className={`${styles["contact-buttons-box-shadow"]} w-full rounded-lg shadow px-7 md:px-10  bg-[var(--yellow)] ${styles["send-message-button"]} py-3 font-bold uppercase`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="schedule-form bg-white px-3 md:px-5 lg:px-7 py-10 max-lg:rounded-b-xl lg:rounded-r-xl">
              <h6 className="font-bold mb-5 text-[--purple-medium]">
                Schedule an appointment
              </h6>
              <InlineWidget url="https://calendly.com/platformable" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// export async function getServerSideProps(ctx) {
//   try {
//   /*   const res = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER_URL}/api/engage?populate=*`
//     );
//     const data = await res.json(); */

//     const [data, posts] = await Promise.all([
//       fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/api/engage?populate=*`
//       ).then((res) => res.json()),
//       fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?populate=*`).then(
//         (res) => res.json()),
//     ]);

//     return {
//       props: {
//         data: data?.data?.attributes,
//         posts: posts?.data,
//       },
//     };

//   } catch (error) {
//     return {
//       props: {
//         data: "No Data",
//       },
//     };
//   }
// }
