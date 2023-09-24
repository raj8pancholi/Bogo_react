import React, { useState} from 'react';
import MerchantNavItem from './MerchantNavItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories }from '../../../../redux/slices/categorySlice' 
 



const MerchantNavTabs = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const { categories } = useSelector((state) => state.category)

  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchCategories());
  }, [dispatch]);
  

  return (
    <ul className="nav nav-tabs merchent-nav-box" role="tablist"  >
      {categories.map(category => (
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
