import Navbar from "./Navbar";

const Blog = () => {
  return (
    <div class="row-combo">
      <Navbar></Navbar>
      <div className="blog">
        <div className="progressBar">
        █ █ █ <span>31%</span> 
        </div>
       
        <br />
        <div className="glitch">
        &gt; Site Under Construction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        &gt; Coming Soon <span id="imle">█</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
       
      </div>
    </div>
  );
};

export default Blog;
