import styles from "@/styles/APIGovernance.module.css";

export default function OurProcess({ data }) {
  return (
    <section className={`py-10 text-[var(--blue-extra-dark)] bg-[var(--purple-double-extra-light)]`}>
      <div className="container mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
             src="/platformable-icon-purple-dark.png"
            alt=""
            className="md:flex hidden"
          />
          <h3
            className={` font-bold md:leading-10 leading-8 `}
          >
            {data?.our_process_title}
          </h3>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.process_description,
          }}
          className="text-[#3B27CE]"
        />
        <div className=" rounded ">
        <img src={data?.diagram?.data?.attributes?.url} alt="" />
        </div>
      </div>
    </section>
  );
}
