import{ useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import NewsCard from "./components/NewsCard"
import ReactPaginate from "react-paginate"

const NewsPage = () =>{
  const [currentPage, setCurrentPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuerry] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handlePageChange = event => {
    console.log(event);
    setCurrentPage(event.selected);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setCurrentPage(0);
    setQuerry(searchInput);
  }

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async() => {
      try {
          const { data } = await axios.get("https://hn.algolia.com/api/v1/search?", 
          {
            params: {page: currentPage, query},
          }
          );
          const  { hits, nbPages } = data;
          setArticles(hits);
          setTotalPages(nbPages);
      } catch (err) {
          console.log(err);
      } finally {
          setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage, query])


  return(
    <div className="container pb-5">
      <form onSubmit={handleSubmit} className="flex place-items-center container mx-auto lg:max-w-4xl mt-10 px-5">
        <input className="w-full py-2 px-4 rounded bg-transparent border border-gray-700 focus:border-gray-600 transition-all duration-150 outline-none text-gray-700 placeholder-gray-700 text-m lg:text-lg mb-4 lg:pb-4 mr-5 mb-4" placeholder="Search for the news" value={searchInput} onChange={event => setSearchInput(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit} className="bg-white border border-gray-700 text-m lg:text-lg py-2 px-6 rounded lg:pb-4 text-gray-700 hover:bg-transparent transition-all duration-150 mb-4 lg:mb-4">Search</button>
      </form>  
      <div className="news-container">
        {
          isLoading ? (
            <p style={{color: "white"}}>Loading...</p>
          ) : (
            articles.map((article) => (
              <NewsCard article={article} key={article.objectID} />
            ))
          )
        }
      </div>

      <ReactPaginate 
        nextLabel = ">>"
        previousLabel = "<<"
        breakLabel = "..."
        forcePage={currentPage}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        onPageChange={handlePageChange}
        className="pagination"
        activeClassName="active-page"
        previousClassName="previous-page"
        nextClassName="next-page"
      />
    </div>
  )
};

export default NewsPage;