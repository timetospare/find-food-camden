import { useEffect, useState } from 'react';
import categories from '../models/categories';
import PropTypes from 'prop-types';

const Categories = props => {
  const { handleCategoryClicked, categoryFilter } = props;
  return categories.map(category => {
    return (
      <div
        className={`category cursor-pointer flex flex-col items-center focus:border-blue-500 ${
          categoryFilter && categoryFilter !== category.value
            ? `opacity-25`
            : 'opacity-100'
        }`}
        key={category.value}
        onClick={() => handleCategoryClicked(category.value)}
        onKeyDown={e => {
          if (e.key.enter || e.key.space) {
            handleCategoryClicked(category.value);
          }
        }}
        tabIndex="0"
      >
        <img
          src={category.imgSrc}
          className={`w-10 md:w-12 `}
          alt={`filter by ${category.name}`}
        />
        <p className={`hidden lg:block text-center capitalize text-md`}>
          {category.name}
        </p>
      </div>
    );
  });
};

const CategoriesFilter = props => {
  const { categoryFilter, setCategoryFilter } = props;

  const handleCategoryClicked = category => {
    setCategoryFilter(category);
  };

  const handleClearFilters = () => {
    setCategoryFilter(null);
  };

  return (
    <div className="flex flex-row justify-around bg-white rounded-xl absolute py-1 text-center overflow-x-auto w-10/12 shadow-lg lg:shadow-none lg:w-full lg:-mt-4 lg:pt-4 ">
      <Categories handleCategoryClicked={handleCategoryClicked} {...props} />
      {categoryFilter && (
        <button
          className="lg:pt-2 flex flex-col space-around justify-center"
          onClick={handleClearFilters}
        >
          <img
            src="/icons/filter-reset.svg"
            alt="reset filter"
            className="text-center md:w-8"
          />
          <p className="hidden lg:block text-center capitalize text-md pt-2">
            Clear
          </p>
        </button>
      )}
    </div>
  );
};

CategoriesFilter.propTypes = {
  allCategories: PropTypes.arrayOf(PropTypes.string),
  categoryFilter: PropTypes.string,
  setCategoryFilter: PropTypes.func.isRequired,
  setCategoryClicked: PropTypes.func,
};

export default CategoriesFilter;
