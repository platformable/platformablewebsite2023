import FormSection from "../../components/become-partner/FormSection";
import Hero from "../../components/become-partner/Hero";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";

export default function BecomePartner({ data}) {

  return (
    <Layout>
      <Meta title={data?.headline} data={data} />
      <Hero data={data} />
      <FormSection data={data} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/become-partner?populate[partnerType][populate][options]=*&populate[hero][populate][options]=*`
      )
      const data = await res.json()
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
