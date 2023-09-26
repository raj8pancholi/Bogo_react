import React, { useState} from 'react';
import MerchantNavItem from './MerchantNavItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories }from '../../../../redux/slices/categorySlice'  
import { fetchSubcategory } from '../../../../redux/slices/subCategorySlice';



const MerchantNavTabs = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = useSelector((state) => state.category.categories);
 
  const dispatch = useDispatch();


  useEffect(() => {
  if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories]);

  const handleCategoryClick = async(categoryId) => {
    setActiveCategory(categoryId);
    console.log("categoryId....", categoryId);

    try {
      await dispatch(fetchSubcategory(categoryId)); 
    } catch (error) {
      console.error('Error fetching subcategoriessssss', error);
    }
  };

 

  return (
    <ul className="nav nav-tabs merchent-nav-box" role="tablist">
      {categories.map((category) => (
        <MerchantNavItem
          key={category.id}
          category={category}
          isActive={activeCategory === category.id}
          onClick={() => handleCategoryClick(category.id)}
        />
      ))}
    </ul>
  );
};

export default MerchantNavTabs;
