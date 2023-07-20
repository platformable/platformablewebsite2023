import styles from "@/styles/DataGovernancepage.module.css";

export default function GovernanceServices({ description, services }) {
  return (
    <section className={`pt-10 pb-20  ${styles.background_services}`}>
      <div className="container mx-auto">
      <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          className="text-white mb-20"
        />
        <div className="flex flex-wrap gap-y-16 justify-center">
          {services?.map((service, i) => (
            <div className="flex w-2/6 px-7 flex-col gap-6 items-center justify-start" key={i}>
              <img src={service.service_img.data.attributes.url} alt="Data Governance service icon"/>
              <p className="text-white text-center">{service.service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
