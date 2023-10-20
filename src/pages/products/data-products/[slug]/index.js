import Layout from "../../../../../components/Layout";
import ActionableInformation from "../../../../../components/obof-trends-reports/ActionableInformation";
import DiscoverBenefits from "../../../../../components/obof-trends-reports/DiscoverBenefits";
import Hero from "../../../../../components/obof-trends-reports/Hero";
import ProductDescription from "../../../../../components/obof-trends-reports/ProductDescription";
import ProductDescriptionMobile from "../../../../../components/obof-trends-reports/ProductDescriptionMobile";
import FindMore from "../../../../../components/data-products/FindMore";


export default function OpenBankingOpenFinanceTrendsReports({data}) {
    console.log(data)
    const sectorsStyle = {
      'Open Banking': {
        bgColor: 'bg--gradient-obof',
        bgGradientColor: 'bg--gradient-obof',
        textColor: 'white',
        checklistImage: '/benefits_check_obof.svg'
      },
      'Open Health': {
        bgColor: 'bg--gradient-oh',
        bgGradientColor: 'bg--gradient-oh',
        textColor: 'white',
        checklistImage: '/benefits_check_oh.svg'
      },
      'Open Ecosystems': {
        bgColor: 'bg-[--oe-dark]',
        bgGradientColor: 'bg--gradient-oe',
        textColor: 'text-[var(--blue-dark)]',
        checklistImage: '/benefits_check_oe.svg'
      },
    }
    return (
        <>
        <Layout>
            <Hero data={data}/>

            <section id="actionable-discover" className={`${sectorsStyle[data?.sector].bgColor} py-10`}>
                <ActionableInformation data={data} sectorsStyle={sectorsStyle}/>
                <DiscoverBenefits data={data} sectorsStyle={sectorsStyle}/>
            </section>
            <ProductDescription data={data} sectorsStyle={sectorsStyle}/>
            <ProductDescriptionMobile  sectorsStyle={sectorsStyle} data={data}/>
            <FindMore sectors={data?.sectors}/>
        </Layout>
        </>
    );
}

export async function getServerSideProps(ctx) {
    
    try {
      const slug=await ctx.params.slug
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/product-landing-pages?filters[slug]=open-banking-open-finance-trends-report&populate[hero_images]=*&populate[actionable_information_card][populate][image]=*&populate[discover][populate][persona][populate][persona_image]=*&populate[products][populate][product_icon]=*&populate[sectors][populate][icon]=*&populate[sectors][populate][image]=*&populate[discover][populate][benefits]=*&populate[featured_img]=*`
      );
      const data = await res.json()
      return {
        props: {
          data: data?.data[0].attributes,
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
