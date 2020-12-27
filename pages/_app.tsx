import '../styles/globals.scss'
import '../styles/Navbar.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
