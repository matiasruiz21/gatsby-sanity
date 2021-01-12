import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>¿Qué es esto?</h1>
        <h2>Esto es un Blog desarrolado con Gatsby (frontend) y Sanity (backend)</h2>
        <p>
          ¿Querés una página como esta? <Link to="/contact">Hablame Rey  <span role="img" aria-label="corona">👑</span></Link>
        </p>
      </Layout>
    </div>
  );
};

export default IndexPage;
