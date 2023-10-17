import Layout from "../../../../components/Layout";
import ActionableInformation from "../../../../components/obof-trends-reports/ActionableInformation";
import DiscoverBenefits from "../../../../components/obof-trends-reports/DiscoverBenefits";
import Hero from "../../../../components/obof-trends-reports/Hero";
import ProductDescription from "../../../../components/obof-trends-reports/ProductDescription";
import FindMore from "../../../../components/data-products/FindMore";


export default function OpenBankingOpenFinanceTrendsReports() {
    return (
        <>
        <Layout>
            <Hero />

            <section id="actionable-discover" className="bg--gradient-obof py-10">
                <ActionableInformation />
                <DiscoverBenefits />
            </section>
            <ProductDescription />

        </Layout>
        </>
    );
}

// export async function getServerSideProps(ctx) {
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/api/data-product?populate[data_products_hero_img]=*&populate[featured_img]=*&populate[products][populate][product_icon]=*&populate[testimonials][populate][testimonials_img]=*&populate[discovery_images]=*&populate[scope_img1]=*&populate[scope_img2]=*&populate[scope_img3]=*&populate[sectors][populate][icon]=*&&populate[sectors][populate][image]=*`
//       );
//       const data = await res.json();
  
//       return {
//         props: {
//           data: data?.data?.attributes,
//         },
//       };
//     } catch (error) {
//       return {
//         props: {
//           data: "No Data",
//         },
//       };
//     }
//   }
