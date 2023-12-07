import { RestaurantsPage } from "./pages/restaurants-page/component";
import "./styles/index.css";
import {Footer} from "./components/footer/component.jsx";
import {Header} from "./components/header/component.jsx";
import {ThemeProvider} from "./components/theme/component.jsx";
export const App = ({ restaurants }) => {
    return <ThemeProvider>
        <Header />
        <RestaurantsPage restaurants={restaurants} />
        <Footer/>
    </ThemeProvider>;
};
