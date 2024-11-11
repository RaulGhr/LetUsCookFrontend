import "./RecipePreview.style.scss";

/**
 * RecipePreview component displays a preview of a recipe with an image, title, number of ingredients, and preparation time.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.Title - The title of the recipe.
 * @param {string} props.Img - The URL of the recipe image.
 * @param {number} props.IngredinetsNumber - The number of ingredients in the recipe.
 * @param {number} props.PrepTime - The preparation time in minutes.
 * @returns {JSX.Element} The RecipePreview component.
 */
const RecipePreview = ({Title, Img, IngredinetsNumber, PrepTime}) => {

    return (
        <div className="RecipePreview">
            <div className="imagePlaceHolder">
                <img src={Img} alt="Recepie" />
            </div>
            <h3>{Title}</h3>
            <p>{IngredinetsNumber} Ingredients {PrepTime} Minutes</p>
        </div>
    );
};

export default RecipePreview;