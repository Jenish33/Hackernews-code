import NewsPage from "./NewsPage"

export default function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mynavbar mb-3">
              <div class="container-fluid">
                <a class="navbar-brand" href="#"><span className="logo">Y</span> Hacker News</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link active" href="#">News</a>
                    <a class="nav-link" href="#">Search</a>
                    <a class="nav-link" href="#">Comment</a>
                    <a class="nav-link disabled">Show</a>
                  </div>
                </div>
              </div>
      </nav>
      <NewsPage />
    </>
  )
}