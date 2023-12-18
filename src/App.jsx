import { RestaurantsPage } from "./pages/restaurants-page/component";
import "./styles/index.css";
import {Footer} from "./components/footer/component.jsx";
import {Header} from "./components/header/component.jsx";
import {ThemeProvider} from "./components/theme/component.jsx";
import {Provider} from "react-redux";
import store from "./redux/index.js";
export const App = () => {
    return <Provider store={store}>
        <ThemeProvider>
            <Header />
            <RestaurantsPage />
            <Footer/>
        </ThemeProvider>
    </Provider>
    ;
};
