"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qualifierParser = (query) => {
    let defualtURL = "https://api.github.com/search/repositories?q=stars%3A>1+sort%3Astars";
    query.created_after && (defualtURL += `+created%3A>${query.created_after}`);
    query.language && (defualtURL += `+language%3A${query.language}`);
    query.skip && +query.skip >= 1
        ? (defualtURL += `&page=${query.skip}`)
        : (defualtURL += `&page=1`);
    query.limit && [10, 50, 100].includes(+query.limit)
        ? (defualtURL += `&per_page=${query.limit}`)
        : (defualtURL += `&per_page=10`);
    return defualtURL;
};
exports.default = qualifierParser;
