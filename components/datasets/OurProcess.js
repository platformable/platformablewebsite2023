import styles from "@/styles/Datasetspage.module.css";

export default function OurProcess({ data }) {
  return (
    <section className={`py-10  ${styles["datasets-our-process-bg"]}`}>
      <div className="container mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
            src="/platformable-icon-white.svg"
            alt=""
            className="md:flex hidden"
          />
          <h2
            className={`text-white  font-bold md:leading-10 leading-8 `}
          >
            Our Process
          </h2>
        </div>
        <div className="flex items-center justify-center bg-white bg-opacity-50 rounded py-72">
          <h4 className="text-[var(--purple-dark)]">Diagram</h4>
        </div>
      </div>
    </section>
  );
}
