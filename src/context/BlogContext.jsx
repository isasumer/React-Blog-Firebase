import { createContext, useContext, useState} from "react";
import data from "../helpers/data";

const BlogContext = createContext();

export const useBlog = () => {
  return useContext(BlogContext);
};

export const BlogProvider = ({ children }) => {
  const [info, setInfo ] = useState(data[0]);
  const value = {
    info
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
export default useBlog;
