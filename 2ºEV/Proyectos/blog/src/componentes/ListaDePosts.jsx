import React from "react";
import { useState } from "react";

const ListaDePosts =({posts})=>{

    return (
        <div>
            <h3>Post recientes</h3>
            {posts.length === 0 ? (<p>No hay publicaciones</p>) 
            : posts.map(
                (post)=>{
                    return(
                    <div key={post.id} > 
                        <p>{post.contenido}</p>
                    </div>
                    )
                }

            )      }
        </div>
    )    
};

export default ListaDePosts;