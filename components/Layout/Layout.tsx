import * as React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#e0b973" />
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/assets/images/logo-circle.png" />
      <meta
        name="description"
        content="Un lugar idílico donde descansar en el Camino Portugés de Santiago en Caldas de Reis."
      />      
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-213807336-1%22%3E"></script>
      <script dangerouslySetInnerHTML={{
      __html:  `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-213807336-1');`}} />
    </Head>
    {children}
    <script
      defer={true}
      src="https://widget.siteminder.com/ibe.min.js"
    ></script>
  </div>
);

export default Layout;
