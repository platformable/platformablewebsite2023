import Collaborators from "../../components/contact-us.js/Collaborators";
import Layout from "../../components/Layout";
import Hero from "../../components/meet-an-expert/Hero";
import SocialProof from "../../components/meet-an-expert/SocialProof";
import Meta from "../../components/Meta";

export default function MeetAnExpert({ data}) {

  return (
    <Layout>
      <Meta title={data?.hero?.smallHeadline} data={data} />
      <Hero data={data} />
      <Collaborators data={data}/>
      <SocialProof data={data} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/meet-an-expert?populate[hero][populate][options]=*&populate[collaborators][populate][collaborator_img]=*&populate[testimonials][populate][image]=*`
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
