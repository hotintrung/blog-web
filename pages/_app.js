import { Provider } from "react-redux";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import store from "../store";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
