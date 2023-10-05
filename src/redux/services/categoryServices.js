import HttpClient from "./http-client";

const getAllCategory = () => HttpClient.get("/merchant/category");
const getSubcategory = (categoryId) => HttpClient.get(`/merchant/subcategory/?categoryId=${categoryId}`);


const CategoryService = { getAllCategory , getSubcategory};
  
  export default CategoryService;