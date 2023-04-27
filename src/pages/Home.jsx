import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  
  async  function fetchData() {
    setLoading(true);
    try{
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
    }
    catch(error) {
      console.log("Network error");
      toast.error("Network issue");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='w-[100%] sm:w-11/12 sm:max-w-6xl mx-auto my-10 overflow-x-hidden'>
      {
        loading ? 
        (<Spinner/>) :
        (
          <div className='grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-6'>
            {
              posts.map((post) => (
                <Product key={post.id} post={post}/>
              ))
            }
          </div>

        )
      }
    </div>
  );
};

export default Home;
