import Head from "next/head";

const Meta = ({ title, keywords, description,data }) => {
  return (
  
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={data?.excerpt.replace(/(<([^>]+)>)/gi, '')} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{data?.title}</title>

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={data?.featured_img?.attributes?.url} />
        <meta name="twitter:title" content={data?.title} />
        <meta name="twitter:description" content={data?.excerpt.replace(/(<([^>]+)>)/gi, '')} />
        <meta name="twitter:site" content="http://www.platformable.com" />
        <meta name="twitter:image" content={data?.featured_img?.attributes?.formats.thumbnail.url} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={data?.excerpt.replace(/(<([^>]+)>)/gi, '')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={data?.featured_img?.attributes?.url} />
        <meta property="og:image:secure_url" content={data?.featured_img?.attributes?.formats.thumbnail.url} />
        <meta property="og:image:alt" content={data?.title} />
        <meta property="og:url" content="https://platformable.com" />
        <meta property="og:site_name" content="platformable.com" />
      </Head>
    
  );
};

Meta.defaultProps = {
  // title: "Platformable",
  keywords:
    "platformable, data, api, open ecosystems, open banking, open finance, open health",
  description:
    "Platformable supports the development of open ecosystems to build a future we can all live in",
};

export default Meta;
