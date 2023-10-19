import Layout from "../../../../../components/Layout";
import ActionableInformation from "../../../../../components/obof-trends-reports/ActionableInformation";
import DiscoverBenefits from "../../../../../components/obof-trends-reports/DiscoverBenefits";
import Hero from "../../../../../components/obof-trends-reports/Hero";
import ProductDescription from "../../../../../components/obof-trends-reports/ProductDescription";
import ProductDescriptionMobile from "../../../../../components/obof-trends-reports/ProductDescriptionMobile";
import FindMore from "../../../../../components/data-products/FindMore";


export default function OpenBankingOpenFinanceTrendsReports({data}) {
    
    return (
        <>
        <Layout>
            <Hero data={data}/>

            <section id="actionable-discover" className="bg--gradient-obof py-10">
                <ActionableInformation data={data}/>
                <DiscoverBenefits data={data}/>
            </section>
            <ProductDescription data={data}/>
            <ProductDescriptionMobile products={data?.products}/>
            <FindMore sectors={data?.sectors}/>
        </Layout>
        </>
    );
}

export async function getServerSideProps(ctx) {
    const slug=ctx.params.slug
    
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/product-landing-pages?filters[slug]=${slug}&populate[hero_images]=*&populate[actionable_information_card][populate][image]=*&populate[discover][populate][persona][populate][persona_image]=*&populate[products][populate][product_icon]=*&populate[sectors][populate][icon]=*&populate[sectors][populate][image]=*&populate[discover][populate][benefits]=*`
      );
      const data = await res.json()
  
      return {
        props: {
          data: data?.data[0].attributes,
        },
      };
    } catch (error) {
      console.log("error de products/dataproducts/index",error)
      return {
        props: {
          data: "No Data",
        },
      };
    }
  }
