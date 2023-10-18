import Layout from "../../../../components/Layout";
import ActionableInformation from "../../../../components/obof-trends-reports/ActionableInformation";
import DiscoverBenefits from "../../../../components/obof-trends-reports/DiscoverBenefits";
import Hero from "../../../../components/obof-trends-reports/Hero";
import ProductDescription from "../../../../components/obof-trends-reports/ProductDescription";
import FindMore from "../../../../components/data-products/FindMore";


export default function OpenBankingOpenFinanceTrendsReports({data}) {
    console.log(data)
    return (
        <>
        <Layout>
            <Hero data={data}/>

            <section id="actionable-discover" className="bg--gradient-obof py-10">
                <ActionableInformation data={data}/>
                <DiscoverBenefits data={data}/>
            </section>
            <ProductDescription data={data}/>

        </Layout>
        </>
    );
}

export async function getServerSideProps(ctx) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/product-landing-pages/1?populate[hero_images]=*&populate[actionable_information_card][populate][image]=*&populate[discover][populate][persona][populate][persona_image]=*&populate[products][populate][product_icon]=*&populate[sectors][populate][icon][populate][image]=*&populate[discover][populate][benefits]=*`
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
