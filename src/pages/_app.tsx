import { ThemeProvider } from "styled-components"
import { Provider } from 'next-auth/client'

import usePersistedState from '../hooks/usePersistedState'
import GlobalStyle from '../styles/global';

import dark from "../styles/themes/dark";
import light from "../styles/themes/light"
import SideBar from "../components/SideBar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('@THEME/index', light);
  const router = useRouter();

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }  
  
  return (  

    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {router.pathname !== "/login" ? <SideBar toggleTheme={toggleTheme}/> : ""}
        <Component {...pageProps}/>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
