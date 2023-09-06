import { useState } from "react";
import styles from "@/styles/ContactUspage.module.css";


export default function WaintingListForm ({apiKey}) {
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

      return (
        <div id="left-column" className="px-3 md:px-10 lg:px-8 py-10 bg-[var(--purple-medium)] rounded-tl-lg">

            <h6 className="font-bold mb-5">Join the waiting list</h6>
            
           
              <form
                name="join-waiting-list"
                method="POST"
                onSubmit={joinWaitingList}
                className="flex flex-col gap-y-5 lg:gap-y-6"
              >
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
                    <h6 className="text-[var(--green)] text-center">Thank you for joining our waiting list!</h6>
                  ) : null
                  }
                
                </div>

       
              </form>
              
            </div>
      )

}