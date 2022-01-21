import Router from "routes/routes";
import GlobalStyles from "theme/globalStyles";
import ScrollToTop from "components/ScrollToTop";
import ThemeConfig from "theme";

function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
}

export default App;
