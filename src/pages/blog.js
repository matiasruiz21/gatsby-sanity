import React from "react";
import Layout from "../components/layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import blogStyles from "./blog.module.scss";
import Head from "../components/head";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            title
            publishedAt(formatString: "LL", locale: "es")
            slug {
              current
            }
            _id
          }
        }
      }
    }
  `);
  return (
    <div>
      <Layout>
        <Head title="Blog"/>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allSanityPost.edges.map((edge) => (
            <li className={blogStyles.post} key={edge.node._id}>
              <Link to={`/blog/${edge.node.slug.current}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedAt}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  );
};

export default BlogPage;
