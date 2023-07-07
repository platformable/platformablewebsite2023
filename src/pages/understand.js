import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Hero from "../../components/understand/Hero";
import ResourcesSearch from "../../components/understand/ResourcesSearch";

export default function DataProducts({}) {
  //   console.log("data",data);

  return (
    <Layout>
      <Hero heroImg={''} hero_title={'Understand'}/>
      <ResourcesSearch />
      <Footer />
    </Layout>
  );
}

// export async function getServerSideProps(ctx) {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER_URL}/api/data-product?populate[data_products_hero_img]=*&populate[products]=*&populate[testimonials][populate][testimonials_img]=*`
//     );
//     const data = await res.json();

//     return {
//       props: {
//         data: data?.data?.attributes,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: "No Data",
//       },
//     };
//   }
// }
