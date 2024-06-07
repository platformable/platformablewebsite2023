import Layout from "../../../../components/Layout";
import ActionableInformation from "../../../../components/obof-trends-reports/ActionableInformation";
import DiscoverBenefits from "../../../../components/obof-trends-reports/DiscoverBenefits";
import Hero from "../../../../components/prooduct/op/Hero";
import ProductDescription from "../../../../components/obof-trends-reports/ProductDescription";
import ProductDescriptionMobile from "../../../../components/obof-trends-reports/ProductDescriptionMobile";
import FindMore from "../../../../components/data-products/FindMore";
import Meta from "../../../../components/Meta";
import WhatsIncluded from "../../../../components/prooduct/op/WhatsIncluded";
import SocialProof from "../../../../components/prooduct/op/SocialProof";
import Benefits from "../../../../components/prooduct/op/Benefits";
import UseCasesPersona from "../../../../components/prooduct/op/UseCasesPersona";
import CTA from "../../../../components/prooduct/op/CTA";


export default function OpenBankingOpenFinanceTrendsReports2({data}) {
  // console.log("new product data", data)
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
    }
    return (
        <>
        <Meta title={data?.hero?.SeoKeyword} keywords={'open banking open finance trends reports, open health, open ecosystems, fintech APIs, financial inclusion'} data={data}/>
        <Layout>
            <Hero data={data}/>
            <SocialProof data={data}/>

            
            <WhatsIncluded data={data}/>
            <Benefits data={data}/>
            <UseCasesPersona data={data}/>
            <CTA data={data}/>  
        </Layout>
        </>
    );
}

export async function getServerSideProps(ctx) {
    
    try {
      const slug=await ctx.params.slug
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/ob-products-pages?filter[slug]=${slug}&populate[hero][populate][image]=*&populate[whatsIncluded][populate][whatsIncludedContent]=*&populate[bentoBox][populate][image]=*&populate[personaCases][populate][image]=*&populate[callToAction]=*&populate[testimonials][populate][image]=*&populate[whatsIncluded][populate][image]=*&populate[pricing][populate][price][populate][description]=*&populate[featured_img]=*`
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
