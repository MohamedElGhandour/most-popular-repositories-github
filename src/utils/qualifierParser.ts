import { Qualifier } from "../models/interfaces";

const qualifierParser = (query: Qualifier) => {
  let defualtURL =
    "https://api.github.com/search/repositories?q=stars%3A>1+sort%3Astars";

  query.created_after && (defualtURL += `+created%3A>${query.created_after}`); // Option

  query.language && (defualtURL += `+language%3A${query.language}`); // Option

  query.skip && +query.skip >= 1
    ? (defualtURL += `&page=${query.skip}`) // Start From 1 - Only the first 1000 search results are available
    : (defualtURL += `&page=1`); // Default

  query.limit && [10, 50, 100].includes(+query.limit)
    ? (defualtURL += `&per_page=${query.limit}`) // 10, 50, 100 - 100 search results are Maximum per page
    : (defualtURL += `&per_page=10`); // Default

  return defualtURL;
};

export default qualifierParser;
