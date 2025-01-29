import Layout from "../../components/Layout";
import Hero from "../../components/home/Hero";
import Meta from "../../components/Meta";
// import Benefits from "../../components/home/Benefits";
// import UseCasesPersona from "../../components/prooduct/op/UseCasesPersona";
// import HowItWorks from "../../components/home/HowItWorks";
// import Products from "../../components/home/Products";
import { colorSchemeBySector } from "../../components/prooduct/colorScheme";
import StaticCarousel from "../../components/StaticCarousel/StaticCarousel";
import dynamic from "next/dynamic";

const HowItWorks = dynamic(() => import('../../components/home/HowItWorks'))
const UseCasesPersona = dynamic(() => import('../../components/prooduct/op/UseCasesPersona'))
const Products = dynamic(() => import('../../components/home/Products'))
const Benefits = dynamic(() => import('../../components/home/Benefits'))

export default function Homepage({data, isMobile}) {

    return (
        <>
        <Meta title={data?.hero[0]?.SeoKeyword} keywords={data?.hero[0]?.SeoKeyword}  data={data}/>
        <Layout>
            <Hero data={data} isMobile={isMobile}/>
            {/* <Collaborators data={data} /> */}
            <StaticCarousel data={data}/>
            <Products data={data} />
            <Benefits data={data}/>
            <UseCasesPersona data={data} colorScheme={colorSchemeBySector.OB}/>
            <HowItWorks data={data} />
        </Layout>
        </>
    );
}

export async function getServerSideProps({req, res}) {
  const userAgent = req.headers["user-agent"] || "";
  const isMobile = /mobile/i.test(userAgent); // Detección básica
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/home?populate[hero][populate][image]=*&populate[collaborators][populate][collaboratorLogo][populate][collaborator_img]=*&populate[benefits][populate][benefits_img]=*&populate[steps]=*&populate[callToAction][populate][cta_option]=*&populate[callToAction][populate][cta_img]=*&populate[products][populate][product][populate][image]=*&populate[personaCases][populate][image]=*&populate[featured_img]=*`
      );
      const data = await res.json()
      return {
        props: {
          data: data?.data?.attributes,
          isMobile
        },
      };
    } catch (error) {
      return {
        // redirect: {
        //   destination: '/',
        //   permanent: false,
        // },
      }
    }
  }
