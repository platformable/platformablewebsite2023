
export async function getStaticProps() {
    return {
      redirect: {
        permanent: false,
        destination: "https://platformable.com",
      },
    };
  }

export default function Custom404() {
    return <h1>404 - Page Not Found</h1>
  }


