import styles from "@/styles/DataGovernancepage.module.css";

export default function OurProcess({ data }) {
  return (
    <section className={`py-10  bg-[var(--purple-double-extra-light)]`}>
      <div className="container text-[var(--blue-extra-dark)] mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
            src="/platformable-icon-purple-dark.png"
            alt=""
            className="md:flex hidden"
          />
          <h3
            className={`font-bold md:leading-10 leading-8 `}
          >
            {data?.process_title}
          </h3>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.process_description,
          }}
          className=""
        />
        <div className=" flex items-center justify-center  rounded py-7">
          <img src={data?.process_media?.data?.attributes?.url} alt="" />
          
        </div>
      </div>
    </section>
  );
}
