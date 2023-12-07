import {useTheme} from "../theme/hooks.js";

export const Header = () => {
    const { theme, setTheme } = useTheme();
    return <div>
        <button>Заказ</button>
        <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>Смена темы</button>
    </div>;
};
