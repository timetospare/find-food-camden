import PropTypes from "prop-types";
import renderCategoryIcon from "../methods/renderCategoryIcon";
import categories from "../models/categories";

const OrgCategories = (props) => {
  const { org, names } = props;

  const allCategories = categories.map(
    (category) => Object.values(category)[1]
  );
  const foodCategories = org?.offering?.filter((cat) => allCategories.includes(cat))

  return (
    <div className="flex flex-row flex-wrap space-x-1">
      {foodCategories?.map((categoryName, i) => (
        <div className="flex flex-row justify-center items-center" key={categoryName + i}>
            {renderCategoryIcon({categoryName, ...props})}
          {names && <p className="capitalize text-sm mr-4 md:mr-8">{categoryName}</p>}
        </div>
      ))}
    </div>
  );
};

export default OrgCategories;
