import Layout from "../../components/Layout";
import Hero from "../../components/home/Hero";
import Meta from "../../components/Meta";
import Benefits from "../../components/home/Benefits";
import UseCasesPersona from "../../components/prooduct/op/UseCasesPersona";
import Collaborators from "../../components/home/Collaborators";
import HowItWorks from "../../components/home/HowItWorks";
import Products from "../../components/home/Products";


export default function Perritos({data}) {
  console.log("new product data", data)
   
    return (
        <>
        <Meta title={data?.hero[0]?.SeoKeyword} keywords={data?.hero[0]?.SeoKeyword}  data={data}/>
        <Layout>
            <Hero data={data}/>
            <Collaborators data={data} />
            <Products data={data} />
            <Benefits data={data}/>
            <UseCasesPersona data={data}/>
            <HowItWorks data={data} />
        </Layout>
        </>
    );
}

export async function getServerSideProps(ctx) {
    
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/home?populate[hero][populate][image]=*&populate[collaborators][populate][collaboratorLogo][populate][collaborator_img]=*&populate[benefits][populate][benefits_img]=*&populate[steps]=*&populate[callToAction][populate][cta_option]=*&populate[callToAction][populate][cta_img]=*&populate[products][populate][product][populate][image]=*&populate[personaCases][populate][image]=*`
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
