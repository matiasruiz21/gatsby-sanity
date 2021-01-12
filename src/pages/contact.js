import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact"/>
        <h1>Contact</h1>
        <p>
          La mejor forma de contactarme es a travez de <a href="https://www.instagram.com/mati.ruiiz/" target="_blank" rel="noreferrer">@matii.ruiz</a> via Instragram!
        </p>
      </Layout>
    </div>
  );
};

export default ContactPage;
