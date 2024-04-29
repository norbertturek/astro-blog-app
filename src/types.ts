type Page = {
  data: Post[];
  url: {
    prev: string;
    next: string;
  };
};

type Post = {
  frontmatter: {
    title: string;
    date: string;
    author: string;
    image: {
      src: string;
      alt: string;
    };
    description: string;
    draft: boolean;
    category: string;
  };
  file: string;
  url: string;
  rawContent: string;
  compiledContent: string;
  getHeadings: Function;
  Content: Function;
  default: Function;
};