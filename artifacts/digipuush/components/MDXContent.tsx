import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { slugifyHeading } from "./ArticleTools";

const components = {
  h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
    <h2 id={slugifyHeading(String(children))} {...props}>
      {children}
    </h2>
  ),
  h3: (props: React.ComponentProps<"h3">) => <h3 {...props} />,
  p: (props: React.ComponentProps<"p">) => <p {...props} />,
  ul: (props: React.ComponentProps<"ul">) => <ul {...props} />,
  ol: (props: React.ComponentProps<"ol">) => <ol {...props} />,
  li: (props: React.ComponentProps<"li">) => <li {...props} />,
  a: (props: React.ComponentProps<"a">) => <a {...props} />,
  table: (props: React.ComponentProps<"table">) => (
    <div className="prose-table-wrap">
      <table {...props} />
    </div>
  ),
  th: (props: React.ComponentProps<"th">) => <th {...props} />,
  td: (props: React.ComponentProps<"td">) => <td {...props} />,
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-digipuush">
      <MDXRemote
        source={source}
        components={components}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </div>
  );
}
