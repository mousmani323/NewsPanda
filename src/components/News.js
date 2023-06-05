import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [filteredData , setFilteredData] = useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  let parseData = [];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProgress(70);
    // localStorage.setItem("parseData", JSON.stringify(parseData));
    setArticles(parseData.articles);
    setFilteredData(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `NewsPanda - ${capitalizeFirstLetter(props.category)}`;
    updateNews(); // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${
      process.env.REACT_APP_NEWS_API
    }&page=${page + 1}&pageSize=${props.pageSize}`;

    // `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=10&apikey=cc1202611601f37038849e8ab307148b`
    setPage(page + 1);
    let data = await fetch(url);
    parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setFilteredData(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };
  const handleSearch =(e) => {
    let value = e.target.previousSibling.value.toLowerCase();
    console.log(value)
    let result = [];
    result = articles.filter((data) => {
      return data.title.search(value) != -1;
      });
      setFilteredData(result);
  }

  return (
    <>
      <div className="Header container">
        <img id="headerImg" src={props.mode==='dark'?'../logoDark.png' : '../logo.png' } alt=""/>
        <div className="txt-search">
          <h1
            className="d-flex justify-content-center"
            style={{ fontSize: "xxx-large", color: props.mode==='dark'? 'white':'black' }}
          >
            News Panda - Top {capitalizeFirstLetter(props.category)} Headlines
          </h1>
          <div className="searchBar">
            <input
              type="search"
              placeholder="Search news"
              className="searchBar"
            />
            <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} onClick={(e) =>handleSearch(e)}/>
          </div>
        </div>
      </div>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={totalResults !== (articles ? articles.length : 0)}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>--You have reached the end--</b>
          </p>
        }
      >
        <div className="container my-3">
          <div className="row">
            {articles &&
              articles.map((e) => {
                return (
                  <div className="col-md-4" key={e.url}>
                    <NewsItem
                      title={e.title}
                      description={e.description}
                      urlToImage={e.urlToImage}
                      newsUrl={e.url}
                      source={e.source}
                      date={e.publishedAt}
                      mode={props.mode}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
