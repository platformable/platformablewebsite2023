import Layout from "../../components/Layout";
import styles from "@/styles/ContactUspage.module.css";
import Meta from "../../components/Meta";
import { InlineWidget } from "react-calendly";


export default function ContactUs({ data, posts }) {
//   console.log("data", data);
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/"))
      .catch((error) => alert(error));
  };
  return (
    <Layout>
      {/* <Meta title={data?.title} data={data} /> */}
      <section className={`bg-[#7D43FF]`}>
        <div className="text-white container mx-auto pt-10 pb-16">
          <h1 className="mb-5 font-bold">{data?.title || "Contact us"}</h1>
          <div className="wrapper grid lg:grid-cols-[1.2fr_1fr]">
            <div className="message-form bg-[var(--purple-dark)] px-3 md:px-5 lg:px-7 py-10 max-lg:rounded-t-xl lg:rounded-l-xl ">
              <h4 className="font-bold mb-5">Leave us a message</h4>
              <form
                name="contact"
                method="POST"
                onSubmit={handleSubmit}
                data-netlify="true"
                className="flex flex-col gap-y-7 lg:gap-y-10"
              >
                <div className="grid grid-cols-2 gap-5">
                  <div className="">
                    <label>
                      <small> First name</small>

                      <input
                        type="text"
                        name="firstname"
                        className="rounded shadow py-2 text-black px-2 w-full mt-1"
                      />
                    </label>
                  </div>
                  <div className="">
                    <label>
                      <small> Last name </small>

                      <input
                        type="text"
                        name="lastname"
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
                      className="rounded shadow py-2 text-black px-2 w-full mt-1 "
                    />
                  </label>
                </div>
                
                <div>
                  <label className="flex items-center gap-x-2">
                    <input type="radio" name="joinWaintingList" className="w-[30px] h-[20px]"/>
                    For now, i just want to
                    <button className="bg-[var(--pink)] px-7 py-2 text-white font-medium shadow rounded-md">
                        Join waiting list
                    </button>
                  </label>
                </div>
                <div>
                  <label className="flex items-center gap-x-2">
                    <input type="radio" name="joinWaintingList" className="w-[30px] h-[20px]"/>
                    I want to contact Platformable
                  </label>
                </div>
                <div>
                  <label>
                    <small>Subject</small>
                    <input
                      type="text"
                      name="subject"
                      className="rounded shadow py-2 text-black px-2 w-full mt-1 "
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <small>Message</small>

                    <textarea
                      name="message"
                      className="rounded shadow py-2 text-black px-2 w-full mt-1 "
                    ></textarea>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-lg shadow px-7 md:px-10 bg-[var(--yellow)] text-black py-2  uppercase"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="schedule-form bg-white px-3 md:px-5 lg:px-7 py-10 max-lg:rounded-b-xl lg:rounded-r-xl">
              <h4 className="font-bold mb-5 text-[--purple-medium]">Schedule an appointment</h4>
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
