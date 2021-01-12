import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";
import blogtStyles from "./blogt.module.scss"
import Head from "../components/head";

export const query = graphql`
  query($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      publishedAt(formatString: "LL", locale: "es")
      mainImage {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
      alternativeText
      _rawBody
    }
  }
`;

const Blog = (props) => {
  return (
    <Layout>
      <Head title={props.data.sanityPost.title}/>
      <h1>{props.data.sanityPost.title}</h1>
      <p>{props.data.sanityPost.publishedAt}</p>
      <Img fluid={props.data.sanityPost.mainImage.asset.fluid} alt={props.data.sanityPost.alternativeText}/>
      <div className={blogtStyles.body}>
        <BlockContent
          blocks={props.data.sanityPost._rawBody}
          projectId="mqodunvr"
          dataset="production"
        />
      </div>
    </Layout>
  );
};

export default Blog;
