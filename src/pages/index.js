import Layout from "../../components/Layout";
import Hero from "../../components/home/Hero";
import Meta from "../../components/Meta";
import Benefits from "../../components/home/Benefits";
import UseCasesPersona from "../../components/prooduct/op/UseCasesPersona";
import Collaborators from "../../components/home/Collaborators";
import HowItWorks from "../../components/home/HowItWorks";
import Products from "../../components/home/Products";
import { colorSchemeBySector } from "../../components/prooduct/colorScheme";


export default function Homepage({data}) {
  

   
    return (
        <>
        <Meta title={data?.hero[0]?.SeoKeyword} keywords={data?.hero[0]?.SeoKeyword}  data={data}/>
        <Layout>
            <Hero data={data}/>
            <Collaborators data={data} />
            <Products data={data} />
            <Benefits data={data}/>
            <UseCasesPersona data={data} colorScheme={colorSchemeBySector.OB}/>
            <HowItWorks data={data} />
        </Layout>
        </>
    );
}

export async function getServerSideProps(ctx) {
    
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/home?populate[hero][populate][image]=*&populate[collaborators][populate][collaboratorLogo][populate][collaborator_img]=*&populate[benefits][populate][benefits_img]=*&populate[steps]=*&populate[callToAction][populate][cta_option]=*&populate[callToAction][populate][cta_img]=*&populate[products][populate][product][populate][image]=*&populate[personaCases][populate][image]=*&populate[featured_img]=*`
      );
      const data = await res.json()
      return {
        props: {
          data: data?.data?.attributes,
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
