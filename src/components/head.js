import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../config';

import logo from '../../static/logo.png';
import appleIcon57x57 from '../../static/favicons/favicon.png';
import appleIcon60x60 from '../../static/favicons/favicon.png';
import appleIcon72x72 from '../../static/favicons/favicon.png';
import appleIcon76x76 from '../../static/favicons/favicon.png';
import appleIcon114x114 from '../../static/favicons/favicon.png';
import appleIcon120x120 from '../../static/favicons/favicon.png';
import appleIcon144x144 from '../../static/favicons/favicon.png';
import appleIcon152x152 from '../../static/favicons/favicon.png';
import appleIcon180x180 from '../../static/favicons/favicon.png';
import androidIcon192x192 from '../../static/favicons/favicon.png';
import favicon32x32 from '../../static/favicons/favicon.png';
import favicon96x96 from '../../static/favicons/favicon.png';
import favicon16x16 from '../../static/favicons/favicon.png';
import msIcon144x144 from '../../static/favicons/favicon.png';

const Head = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `}
    render={({ site }) => (
      <React.Fragment>
        {props.index && (
          <Helmet>
            <html lang="en" />
            <title itemProp="name" lang="en">
              {site.siteMetadata.title}
            </title>
            <meta name="description" content={site.siteMetadata.description} />
            <meta name="keywords" content={config.siteKeywords} />
            <meta property="og:title" content={site.siteMetadata.title} />
            <meta property="og:description" content={site.siteMetadata.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={site.siteMetadata.siteUrl} />
            <meta property="og:site_name" content={site.siteMetadata.title} />
            <meta property="og:image" content={config.siteImage} />
            <meta itemProp="name" content={site.siteMetadata.title} />
            <meta itemProp="description" content={site.siteMetadata.description} />
            <meta itemProp="image" content={config.siteImage} />
            <meta name="twitter:url" content={site.siteMetadata.siteUrl} />
            <meta name="twitter:title" content={site.siteMetadata.title} />
            <meta name="twitter:description" content={site.siteMetadata.description} />
            <meta name="twitter:image:src" content={config.siteImage} />
            <meta name="twitter:image:alt" content={site.siteMetadata.title} />
          </Helmet>
        )}
        <Helmet>
          <link rel="icon" type="image/png" href={logo} />
          <meta name="google-site-verification" content={site.siteMetadata.googleVerification} />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="800" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:locale" content={config.siteLanguage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={config.twitterHandle} />
          <meta name="twitter:creator" content={config.twitterHandle} />

          <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
          <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60x60} />
          <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
          <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
          <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
          <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
          <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
          <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
          <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
          <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192x192} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
          <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
          <meta name="msapplication-TileColor" content={config.navyColor} />
          <meta name="msapplication-TileImage" content={msIcon144x144} />
          <meta name="theme-color" content={config.navyColor} />
          <script src="https://unpkg.com/@babel/standalone/babel.min.js" />
        </Helmet>
      </React.Fragment>
    )}
  />
);

export default Head;
