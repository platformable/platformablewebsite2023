import Layout from '../../components/Layout';
import Footer from "../../components/Footer";
export default function PrivacyPolicy({ data }) {
  console.log("data",data);

  return (
    <Layout>
      <section className="">
      <div className="container mx-auto py-10">
        <h1 className="mb-10 font-bold">
          {data?.title}
        </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content
            }}
          />
         
        </div>
    </section>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/privacy-policy?populate=*`
    );
    const data = await res.json();

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
