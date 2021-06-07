import React from 'react'
import posts from '../data/posts.json';
import {
    useParams, Link
} from 'react-router-dom';

function Blog() {
    const params = useParams();

    const dataId = posts.map((post) => {
        return post.id;
    })

    const dataTitle = posts.map((post) => {
        return post.title;
    })

    const dataContent = posts.map((post) => {
        return post.content;
    })

    const dataDate = posts.map((post) => {
        return post.date;
    })

    return (
        <div className="page">
            <h1>Blog</h1>
            <div className="blog">
                <div>
                    <p>{dataDate[params.id]}</p>
                    <p><b>{dataId[params.id]} {dataTitle[params.id]}</b></p>
                    <p>{dataContent[params.id]}</p>
                </div>
            </div>
            <button>
                <Link to='/blogposts'>Terug</Link>

            </button>
        </div>
    )
        ;
}

export default Blog;