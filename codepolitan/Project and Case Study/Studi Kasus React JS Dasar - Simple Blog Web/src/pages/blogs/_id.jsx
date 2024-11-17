import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePost() {
    const posts = useLoaderData();  

    return (
        <>
            <h2>{posts?.title}</h2>
            <div>{posts?.body}</div>
        </>
    )
}

export default SinglePost;