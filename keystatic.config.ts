import { config, fields, collection } from "@keystatic/core";

export const showAdminUI = process.env.NODE_ENV === "development";

export default config({
  storage: { kind: "local" },
  collections: {
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "content/authors/*",
      format: { data: "yaml" },
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/blog/authors",
          publicPath: "/blog/authors/",
        }),
        role: fields.text({ label: "Role", defaultValue: "Contributor" }),
        bio: fields.text({ label: "Bio", multiline: true }),
        social: fields.object(
          {
            github: fields.url({ label: "GitHub URL" }),
            twitter: fields.url({ label: "Twitter URL" }),
            website: fields.url({ label: "Website URL" }),
          },
          { label: "Social Links" },
        ),
      },
    }),
    blogs: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "public/blog/content/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        subtitle: fields.text({ label: "Subtitle" }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        author: fields.text({ label: "Author", defaultValue: "CAMEL-AI" }),
        authorprofile: fields.image({
          label: "Author Photo",
          directory: "public/blog/authors",
          publicPath: "/blog/authors/",
        }),
        role: fields.text({ label: "Author Role", defaultValue: "Author" }),
        description: fields.text({ label: "Description", multiline: true }),
        cover: fields.image({
          label: "Cover Image",
          directory: "public/blog/thumbnails",
          publicPath: "/blog/thumbnails/",
        }),
        thumbnail: fields.image({
          label: "Thumbnail Image",
          directory: "public/blog/thumbnails",
          publicPath: "/blog/thumbnails/",
        }),
        featured: fields.checkbox({ label: "Featured", defaultValue: false }),
        category: fields.text({ label: "Category" }),
        keywords: fields.array(fields.text({ label: "Keyword" }), {
          label: "Keywords",
          itemLabel: (props) => props.value || "New keyword",
        }),
        toc: fields.checkbox({
          label: "Show Table of Contents",
          defaultValue: true,
        }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },
});
