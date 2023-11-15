import React, { useEffect,useState } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=> {



 const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
    // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsFeed`


  


  const updateNews = async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  
    props.setProgress(100);


  }
  // async componentDidMount() {

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c9913b8100df4199bb7db77b4e68d4c4&page=1&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    // this.updateNews();
  // }
  useEffect(()=>{
    updateNews();
  },[])

  // const handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c9913b8100df4199bb7db77b4e68d4c4&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // });

    // setPage(page - 1)
    // updateNews();
  // };

  // const handleNextClick = async () => {

    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {

    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c9913b8100df4199bb7db77b4e68d4c4&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });
    // }
    
    // setPage(page + 1)
    // updateNews();
  // };

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1 )
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles( articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
  }


    // console.log("render");
    return (
      <>
        <h2 className="d-flex justify-content-center align-items-center " style={{margin:'53px 0px', marginTop:'90px'}}>
          NewsFeed - Top  {capitalizeFirstLetter(props.category)} Headlines
        </h2>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >


          <div className="container">
            <div className="row my-5 justify-content-center align-items-center">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description ? element.description?.slice(0, 88) : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={!element.author ? "Unknown" : element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-around">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &laquo; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div> */}
      </>
    );
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;
