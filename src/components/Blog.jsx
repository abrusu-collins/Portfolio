import "../styles/blog.css"
function Blog() {
    return ( 
        <div className="blog">
           <h1> Recent Blog Posts</h1>
    <div className="top">
           <div className="bloghead">
          <p>I have a blog called <b>ProPropgrammer</b> where I post about React and JavaScript.</p>
          </div>

          <div className="blogpost">
          
          <div className="posts">
        <div className="posthead">
           <h3>Hoisting Explained</h3>
           <p> 19th november 2020</p>
        </div>
        <div className="read"><a href="https://clistesblog.netlify.app/categories/javascript%20posts/hoisting/">Read</a></div>

          </div>

          <div className="posts">
        <div className="posthead">
           <h3>The arguments object</h3>
           <p> 24th October 2021</p>
        </div>
        <div className="read"><a href="https://clistesblog.netlify.app/categories/javascript%20posts/the%20arguments%20object/">Read</a></div>

          </div>
          </div>

          <a href="https://clistesblog.netlify.app/" className="visit">Visit Blog✍️</a>
        </div>
        </div>
     );
}

export default Blog;