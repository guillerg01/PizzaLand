// css
import CartMobile from './components/CartMobile';
import CartMobileIcon from './components/CartMobileIcon';
import Nav from './components/Nav';
import CartProvider from './context/CartContext';
import './globals.css';
import {Bangers,Quicksand,Roboto_Condensed} from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight:['400']
})

const roboto_Condensed= Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotocondensed',
  weight:['300','400', '700']
})

export default function RootLayout({ children }) {
  return (
    <CartProvider>
    <html lang='en'>
      <body className={`${quicksand.variable} ${bangers.variable} ${roboto_Condensed.variable} font-quicksand`}>
        <Nav></Nav>
        <CartMobileIcon></CartMobileIcon>
        <CartMobile></CartMobile>
        {children}
      
      </body>
    </html></CartProvider>
  );
 }
