export default function BlogPage() {
    return (
        <section className="blog-container">
            <div className="blog-header flex justify-between items-center py-10">
                <h1 className="font-bold text-white">Open Banking/Open Finance</h1>
                <Link href="/blog">
                    <button className="py-2 px-7 border-white shadow rounded text-white font-medium">Back to blog section</button>
                </Link>
            </div>
            <article className="py-10">
                <div className="content-header flex justify-between">
                    <div className="flex items-center gap-x-3">
                        <img src="/platformable-icon-purple.svg" alt="Platformable logo"/>
                        <h5 className="font-bold">Engage</h5>
                    </div>
                    <div className="items-center flex gap-x-6">
                        <div className="flex items-center gap-x-2">
                            <img src="" alt="watch"/>
                            <span>3 min read</span>
                        </div>
                        <div></div>
                    </div>
                </div>
                <h3 className="content-title"></h3>
                <small className="content-subtitle"></small>

            </article>
            <div className="flex items-center gap-x-3">
                <img src="/platformable-icon-white.svg" alt="Platformable logo"/>

                <h5 className="mb-10 text-white font-bold">
                    Related articles
                </h5>
            </div>
        </section>
    )
}

// export async function getServerSideProps(ctx) {
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/api/data-product?populate[data_products_hero_img]=*&populate[products][populate][product_icon]=*&populate[testimonials][populate][testimonials_img]=*&populate[discovery_images]=*&populate[scope_img1]=*&populate[scope_img2]=*&populate[scope_img3]=*&populate[sectors][populate][icon]=*&&populate[sectors][populate][image]=*`
//       );
//       const data = await res.json();
  
//       return {
//         props: {
//           data: data?.data?.attributes,
//         },
//       };
//     } catch (error) {
//       return {
//         props: {
//           data: "No Data",
//         },
//       };
//     }
//   }
  