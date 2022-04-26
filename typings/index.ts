import matter from 'gray-matter';

export interface Author {
  name: string;
  picture: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  timeReading: {
    text: string;
  };
  ogImage?: {
    url: string;
  };
  content: string;
}

export interface BlogArticle {
  [key: string]: string | Array<string>;
}

export interface API {
  getRawArticleBySlug: (slug: string) => matter.GrayMatterFile<string>;
  getAllSlugs: () => Array<string>;
  getAllArticles: (fields: string[]) => Array<BlogArticle>;
  getArticlesByTag: (tag: string, fields: string[]) => Array<BlogArticle>;
  getArticleBySlug: (slug: string, fields: string[]) => BlogArticle;
  getAllTags: () => Array<string>;
}
