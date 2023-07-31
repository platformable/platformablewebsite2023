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
          <h2
            className={` font-bold md:leading-10 leading-8 `}
          >
            {data?.our_process_title}
          </h2>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.process_description,
          }}
          className=""
        />
        <div className="mt-10 flex items-center justify-center bg-white bg-opacity-50 rounded py-72">
          <h4 className="text-[var(--blue-extra-dark)]">Diagram</h4>
        </div>
      </div>
    </section>
  );
}
