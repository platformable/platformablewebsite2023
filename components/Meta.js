import Head from "next/head";
import { useRouter } from "next/router";

const Meta = ({ title, keywords, data }) => {
  console.log("meta", data)


  const router = useRouter();
  const urlPath=router.asPath

  
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={data?.keywords || keywords} />
      <meta
        name="description"
        content={data?.excerpt?.replace(/(<([^>]+)>)/gi, "") || keywords}
      />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title + ' » Platformable'}</title>

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={data?.excerpt?.replace(/(<([^>]+)>)/gi, "")}
      />
      <meta name="twitter:site" content={`https://www.platformable.com${urlPath}`} />
      <meta
        name="twitter:image"
        content={
          data?.featured_img?.data?.attributes?.formats?.small?.url ||
          "https://res.cloudinary.com/platformable/image/upload/v1692982725/platformablewebsite2023/value_model_1280x720_ae8a224428.png"
        }
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={data?.excerpt?.replace(/(<([^>]+)>)/gi, "")}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={
          data?.featured_img?.data?.attributes?.formats?.small?.url ||
          "https://res.cloudinary.com/platformable/image/upload/v1692982725/platformablewebsite2023/value_model_1280x720_ae8a224428.png"
        }
      />
      <meta
        property="og:image:secure_url"
        content={
          data?.featured_img?.data?.attributes?.formats?.small?.url ||
          "https://res.cloudinary.com/platformable/image/upload/v1692982725/platformablewebsite2023/value_model_1280x720_ae8a224428.png"
        }
      />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={`https://www.platformable.com${urlPath}`} />
      <meta property="og:site_name" content="platformable.com" />
    </Head>
  );
};

Meta.defaultProps = {
  keywords:
    "platformable, data, api, open ecosystems, open banking, open finance, open health",
};

export default Meta;
