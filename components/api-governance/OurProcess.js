import styles from "@/styles/APIGovernance.module.css";

export default function OurProcess({ data }) {
  return (
    <section className={`py-10  bg-[#E9E8F8]`}>
      <div className="container mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
            src="/platformable-icon-purple-dark.png"
            alt=""
            className="md:flex hidden"
          />
          <h2
            className={`text-[var(--blue-extra-dark)]  font-bold md:leading-10 leading-8 `}
          >
            {data?.our_process_title}
          </h2>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.process_description,
          }}
          className="text-[#3B27CE]"
        />
        <div className=" rounded ">
        <img src={data.diagram.data.attributes.url} alt="" />
        </div>
      </div>
    </section>
  );
}
