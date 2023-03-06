import React, { useEffect, useState} from "react";

const url = 'https://api.noroff.dev/api/v1/online-shop';

function Home() {
  const [posts, setPosts] = useState([]);

 
  useEffect(() => {
    
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      
      setPosts(json);
      console.log(json);
    }
    getData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.imageUrl}</p>
        </div>
      ))}
    </div>
  );
}
export default Home;