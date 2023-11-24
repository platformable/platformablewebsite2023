import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import BlogCarousel from "./BlogCarousel";

export default function ActContent({ data }) {
  return (
    <section className="magic-pattern mt-4  pt-6 pb-10 lg:py-10">
      <article className="content-intro container mx-auto">
        <div className="bg-[#F1EFFF] flex flex-col gap-7 p-7 shadow-lg overflow-x-hidden">
            <div className="">
              <div className="mb-3 flex flex-wrap flex-1 items-center gap-4">
                <img src="/tool_icon.svg" alt="tool icon" />
                <h5 className="text-[var(--purple-medium)] font-bold">Tool</h5>
              </div>
              <span className=" text-base lg:text-xl font-bold">Blog Component Code Generator for Headless CMS</span>
            </div>


            <div className="">
              <div className="mb-3 flex flex-wrap flex-1 items-center gap-4">
                <img src="/tool_icon.svg" alt="tool icon" />
                <h5 className="text-[var(--purple-medium)] font-bold">Link</h5>
              </div>
              <span className="text-base lg:text-xl font-bold underline">https://codegen.platformable.com/</span>
            </div>


            <div className="">
              <div className="mb-3 flex flex-wrap flex-1 items-center gap-4">
                <img src="/tool_icon.svg" alt="tool icon" />
                <h5 className="text-[var(--purple-medium)] font-bold">Description</h5>
              </div>
              <span className="text-base lg:text-xl">Supports a variety of headless CMS platforms, providing flexibility for developers working with different systems. The generated code is optimized for performance and adheres to best practices.</span>
            </div>


            <div className="">
              <div className="mb-3 flex flex-wrap flex-1 items-center gap-4">
                <img src="/tool_icon.svg" alt="tool icon" />
                <h5 className="text-[var(--purple-medium)] font-bold">How this helps foster open ecosystems</h5>
              </div>
              <span className="text-base lg:text-xl">By promoting interoperability, standardization, community collaboration, extensibility, documentation, open-source principles, and integration with third-party services.</span>
            </div>

            <div className="">
              <div className="mb-3 flex flex-wrap flex-1 items-center gap-4">
                <img src="/tool_icon.svg" alt="tool icon" />
                <h5 className="text-[var(--purple-medium)] font-bold">Why we recommend</h5>
              </div>
              <span className="text-base lg:text-xl">By integrating this blog component generator into your toolkit, you empower developers to create high-performing, standards-compliant code, ultimately enhancing the overall quality and user satisfaction of your digital content.</span>
            </div>
        </div>
      </article>
      <div className="content-first-part container mx-auto">
        {data?.markdown_content ? (
          <ReactMarkdown
            className="blog-page"
            // children={data?.markdown_content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
          >
            {data?.markdown_content}
          </ReactMarkdown>
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: data?.act_content_1,
            }}
            className={`mt-7 blog-page bg-white p-7 shadow-lg`}
            id="blogPage"
          />
        )}
      </div>
      <div className="">
        <BlogCarousel carouselData={data.act_carousel} />
      </div>
      <div className="content-second-part container mx-auto">
        {data?.markdown_content ? (
          <ReactMarkdown
            className="blog-page"
            // children={data?.markdown_content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
          >
            {data?.markdown_content}
          </ReactMarkdown>
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: data?.act_content_2,
            }}
            className={`blog-page bg-white p-7 shadow-lg`}
            id="blogPage"
          />
        )}
      </div>
    </section>
  );
}
