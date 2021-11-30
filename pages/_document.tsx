import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />{" "}
          <script
            defer
            async
            src="https://widget.siteminder.com/ibe.min.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
