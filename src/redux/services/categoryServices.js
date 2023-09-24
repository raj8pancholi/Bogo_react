import HttpClient from "./http-client";

const getAllCategory = () => {
  return HttpClient.get("/merchant/category");
};


const CategoryService = { getAllCategory };
  
  export default CategoryService;