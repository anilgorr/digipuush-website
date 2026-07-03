import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h2: (props: React.ComponentProps<"h2">) => <h2 {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <h3 {...props} />,
  p: (props: React.ComponentProps<"p">) => <p {...props} />,
  ul: (props: React.ComponentProps<"ul">) => <ul {...props} />,
  a: (props: React.ComponentProps<"a">) => <a {...props} />,
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-digipuush">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
