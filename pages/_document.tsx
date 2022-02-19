import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html lang='en'>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@300&family=Roboto:wght@100&display=swap" rel="stylesheet"/>
            </Head>
        <body className='bg-fixed  bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument