import Layout from "../../../../components/Layout";
import Hero from "../../../../components/prooduct/op/Hero";
import Meta from "../../../../components/Meta";
import WhatsIncluded from "../../../../components/prooduct/op/WhatsIncluded";
import SocialProof from "../../../../components/prooduct/op/SocialProof";
import Benefits from "../../../../components/prooduct/op/Benefits";
import UseCasesPersona from "../../../../components/prooduct/op/UseCasesPersona";
import CTA from "../../../../components/prooduct/op/CTA";
import { colorSchemeBySector } from "../../../../components/prooduct/colorScheme";

export default function ProductTemplate({data}) {

  console.log("product data",data)
  
    const sectorsStyle = {
      'Open Banking': {
        bgColor: 'bg--gradient-obof',
        bgGradientColor: 'bg--gradient-obof',
        textColor: 'text-[var(--ob-light)]',
        iconColor: 'var(--ob-light)',
        checklistImage: '/benefits_check_obof.svg'
      },
      'Open Health': {
        bgColor: 'bg--gradient-oh',
        bgGradientColor: 'bg--gradient-oh',
        textColor: 'text-[var(--oh-light)]',
        iconColor: 'var(--oh-light)',
        checklistImage: '/benefits_check_oh.svg'
      },
      'Open Ecosystems': {
        bgColor: 'bg-[var(--green)]',
        bgGradientColor: 'bg--gradient-oe',
        textColor: 'text-[var(--blue)]',
        iconColor: 'var(--blue)',
        checklistImage: '/benefits_check_oe.svg'
      },
      'Traceability': {
        bgColor: 'bg-[var(--green)]',
        bgGradientColor: 'bg--gradient-traceability',
        textColor: 'text-[var(--blue)]',
        iconColor: 'var(--blue)',
        checklistImage: '/benefits_check_oe.svg'
      },
    }
    return (
        <>
        <Meta title={data?.hero?.SeoKeyword} keywords={'open banking open finance trends reports, open health, open ecosystems, fintech APIs, financial inclusion'} data={data}/>
        <Layout>
            <Hero data={data} colorScheme={colorSchemeBySector[data?.sector]}/>
            
            {data?.testimonials[0]?.name ===''  ||
            data?.testimonials[0]?.name ===null || data.testimonials.length ===0
            ?'':<SocialProof data={data} colorScheme={colorSchemeBySector[data?.sector]}/>}

            
            <WhatsIncluded data={data} colorScheme={colorSchemeBySector[data?.sector]}/>
            {data?.benefitshHeading && <Benefits data={data} colorScheme={colorSchemeBySector[data?.sector]}/>}
          {data?.personaHeading && <UseCasesPersona data={data} colorScheme={colorSchemeBySector[data?.sector]}/> }  
            <CTA data={data} colorScheme={colorSchemeBySector[data?.sector]}/>  
        </Layout>
        </>
    );
}

export async function getServerSideProps(ctx) {
    
    try {
      const slug=await ctx.params.slug
      console.log("slug",slug)
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/ob-products-pages?filters[slug]=${slug}&populate[hero][populate][image]=*&populate[whatsIncluded][populate][whatsIncludedContent]=*&populate[bentoBox][populate][image]=*&populate[personaCases][populate][image]=*&populate[callToAction]=*&populate[testimonials][populate][image]=*&populate[whatsIncluded][populate][image]=*&populate[pricing][populate][price][populate][description]=*&populate[featured_img]=*`
      );
      const data = await res.json()
      return {
        props: {
          data: data?.data[0].attributes,
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  }
