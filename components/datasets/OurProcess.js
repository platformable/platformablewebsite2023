import styles from "@/styles/Datasetspage.module.css";



export default function OurProcess({ data }) {




  return (
    <section className={`py-10  ${styles["datasets-our-process-bg"]}`}>
      <div className="container mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
            src="/platformable-icon-purple-dark.png"
            alt="Platformable logo"
            className="md:flex hidden"
          />
          <h3
            className={`text-[#3B27CE]  font-bold md:leading-10 leading-8 `}
          >
            Our Process
          </h3>
        </div>
        <div className="grid md:grid-cols-1 grid-cols-1 gap-5" >
          <img src="/our-process-diagram.png" alt="Our process diagram" />
        </div>
      </div>
    </section>
  );
}
