import stringToSlug from "../methods/stringToSlug";
import categories from "../models/categories";

const existingIcons = categories.map((cat) => cat.value);

const renderCategoryIcon = (props) => {
  const { categoryName, isMarker, names, org } = props;

  let categoryShowing;
  if (categoryName) {
    categoryShowing = categoryName;
  } else {
    org?.offering?.forEach((item) => {
      if (existingIcons.includes(item)) {
        categoryShowing = item;
      }
    });
  }

  const imgSrc = (category) =>
    isMarker
      ? `/icons/${stringToSlug(category)}-marker.svg`
      : `/icons/${stringToSlug(category)}.svg`;

  if (existingIcons.includes(categoryShowing)) {
    return (
      <img
        src={imgSrc(categoryShowing)}
        className={`${
          isMarker ? "cursor-pointer h-8 md:h-10 " : "h-10 md:h-12 "
        } rounded-full`}
        alt={isMarker ? org?.name : !names ? categoryShowing : ""}
      />
    );
  } else {
    return null;
  }
};

export default renderCategoryIcon;
