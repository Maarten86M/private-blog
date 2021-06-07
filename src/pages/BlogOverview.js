
import posts from '../data/posts.json';
import {
    Link
} from "react-router-dom";

function BlogOverview() {
    console.log(posts);

    return (
        <div className="blogposts">
            <div>
                <h2>Total blogs: {posts.length}</h2>
                {posts.map(item => <Link to={`/blog/${item.id - 1}`}><p>{item.id} {item.title} </p></Link>)}
            </div>
        </div>
    )
};

export default BlogOverview;