import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";


export default function RegularContent({data}) {
    return (
        <section className="container mx-auto">
        {data?.markdown_content ? (
            
            <ReactMarkdown
              className="blog-page"
              // children={data?.markdown_content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
            >{data?.markdown_content}
            </ReactMarkdown>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content,
              }}
              className={`mt-7 blog-page`}
              id="blogPage"
            />
          )}
        </section>
    );
}
