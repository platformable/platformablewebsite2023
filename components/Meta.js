import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:image" content="your_image_url.jpg" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="your_image_url.jpg" />
        <meta property="og:image:secure_url" content="your_image_url.jpg" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:url" content="https://your-website-url.com" />
        <meta property="og:site_name" content="Your Website Name" />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Platformable",
  keywords:
    "platformable, data, api, open ecosystems, open banking, open finance, open health",
  description:
    "Platformable supports the development of open ecosystems to build a future we can all live in",
};

export default Meta;
