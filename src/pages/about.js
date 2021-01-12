import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About"/>
        <h1>About Page</h1>
        <p>
          Actualmente soy un estudiente la carrera Contador Público en la UNR
        </p>
        <p>
          <Link to="/contact"> ¿Quieres contactarte conmigo? </Link>
        </p>
      </Layout>
    </div>
  );
};

export default AboutPage;
