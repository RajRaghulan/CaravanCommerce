import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
      <title>Caravan Commerce</title>
      <link rel="icon" href="images/favicon.png" type="" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
        rel="stylesheet"
      />

      <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
      <link rel="stylesheet" href="css/animate.css" />

      <link rel="stylesheet" href="css/owl.carousel.min.css" />
      <link rel="stylesheet" href="css/owl.theme.default.min.css" />
      <link rel="stylesheet" href="css/magnific-popup.css" />
      <link rel="stylesheet" href="css/aos.css" />
      <link rel="stylesheet" href="css/ionicons.min.css" />
      <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
      <link rel="stylesheet" href="css/jquery.timepicker.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="css/flaticon.css" />
      <link rel="stylesheet" href="css/icomoon.css" />
      <link rel="stylesheet" href="css/style.css" />

      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Belleza|Marcellus+SC&display=swap');
      </style>
    </Helmet>
    <Layout>
      <Helmet>
        <body className="goto-here" />
      </Helmet>
      <SEO title="Home" />
    </Layout>
  </>
)

export default IndexPage
