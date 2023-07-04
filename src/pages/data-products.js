import Layout from "../../components/Layout";
import Hero from "../../components/data-products/Hero";
import styles from '@/styles/DataProducts.module.css'
export default function DataProducts({ data }) {
  console.log(data);
  return (
    <Layout>
      <Hero />
      <section className="container mx-auto py-10">
        <div className="mb-10">
          <img src="" alt="" />
          <h3>Our Products</h3>
        </div>
        <div  className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((card) => (
            <div className="" data-card-number={card}>
              <div className={`${styles.card_heading}  p-7`}>
                <h6>Open Banking/ Open Finance Trends Report</h6>
              </div>
              <div className="">
                <p>
                  Quarterly global trends report summarising all bank platforms,
                  fintech API providers, APIs, business models, partnerships,
                  and use cases in open banking and open finance
                </p>
                <br/>
                <i>Data used to create the trends report is provided with each edition</i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/data-product?populate[data_products_hero_img]=*&populate[products]=*&populate[testimonials][populate][testimonials_img]=*`
    );
    const data = await res.json();

    return {
      props: {
        data: data?.data?.attributes,
      },
    };
  } catch (error) {
    return {
      props: {
        data: "No Data",
      },
    };
  }
}
