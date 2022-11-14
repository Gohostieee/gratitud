import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Page from '../components/page'

export default function App({ Component, pageProps }: AppProps) {
  return <Page><Component data-theme = {"cupcake"} {...pageProps} /></Page>
}
