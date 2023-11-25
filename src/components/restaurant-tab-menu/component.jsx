export const RestaurantTabMenu = ({ restaurants, onSelectButton }) => {
    return <div>
        {
            restaurants.map(({name, id}) => (
                <>
                    <button onClick={() => onSelectButton(id)}>{name}</button>
                </>
            )
        )}
    </div>;
};
