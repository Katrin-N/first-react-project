import styles from "./styles.module.css";
export const RestaurantTabMenu = ({ restaurants, onSelectButton }) => {
    return <div className={styles.block}>
        {
            restaurants.map(({name, id}) =>
                <button onClick={() => onSelectButton(id)} className={`${styles.menu}`}>
                    {name}</button>
            )
        }
    </div>;
};
