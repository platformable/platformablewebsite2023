import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import BlogCarousel from "./BlogCarousel";

export default function ActContent({ data }) {
  return (
    <section className="">
      <div className="content-header container mx-auto mt-8">
        <div className="summary-box text-white summary-box-health-dark">
          <h3 className="">Who should read this:</h3> Healthcare industry leads,
          healthtech, health equity advocates, API service providers,
          researchers, regulators, non-governmental health organizations. <br />
          <br />
          <h3 className="">What it’s about:</h3> This article describes our open
          health data model and our methodology for measuring and mapping
          ecosystem participation and value generation.
          <br />
          <br />
          <h3 className="">Why it’s important:</h3> We need to be able to
          measure whether the opening of health systems is enabling innovation
          and expanding health and wellbeing and generating other benefits for
          all stakeholders. With the move to digital infrastructures and open
          APIs for health, we need to understand how value flows through the
          ecosystem and how it is distributed. We describe a model that can help
          identify what should be measured to ensure everyone benefits from open
          health ecosystems. <br />
        </div>
      </div>
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
            className={`mt-7 blog-page`}
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
            className={`mt-7 blog-page`}
            id="blogPage"
          />
        )}
      </div>
    </section>
  );
}
