import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function RegularContent({ data }) {
  return (
    <section className="container mx-auto">
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
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content,
            }}
            className={`mt-7 blog-page`}
            id="blogPage"
          />
          {data?.footnote?.length > 0 ? (
            <div className="p-7 rounded-md bg-[#FBC6FD] ">
              <p className="font-bold">Article references</p>
              {data?.footnote?.map((note, index) => {
                let subheading = note.subheading;
                const spacing = ": ";
                const content = subheading.concat(note.footnote);

                return (
                  <div className="flex gap-x-1 my-5" key={index}>
                    <span className="text-xs">{index + 1} </span>
                    <p>
                      <strong>{note.subheading} :</strong>{" "}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: note.footnote,
                        }}
                        className={`text-xl footnote `}
                        id="blogPage footnote"
                      />
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}
