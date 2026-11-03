import {useState, useEffect} from 'react'
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';

const catAPI = "https://api.thecatapi.com/v1/images/search?limit=8&size=full&breed_id=beng&sub_id=demo-ca06d4";

function Home() {
    const name = "John Doe";
    const [number,setNumber] = useState(3);
    const [catImage, setCatImage] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const handleAdd = () => {
      setNumber(number + 1);
    }
    const handleMinus = () => {
      setNumber(number - 1);
    }
    const handleReset = () => {
      setNumber(3);
    }

    useEffect(() => {
      const fetchCatImage = async () => {
        try {
          setLoading(true);
          const response = await fetch(catAPI);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setCatImage(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchCatImage();
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error: {error}</p>;
    }

  return (
    <>
      <Navbar />
      <Hero pagename = "Home Page" /> 
      <h1>Home Page</h1>
      <p>This is the home page of the Vite project.</p>
      <h3>Welcome, {name}!</h3>
      <h2>{number}</h2>
      <button onClick={handleAdd}> ADD </button>
      <button onClick={handleMinus}> DEDUCT </button>
      <button onClick={handleReset}> RESET </button>
      <div>
        {catImage.map((cat) => (
          <img key={cat.id} src={cat.url} alt="Cat" width="200" height="200" />
        ))}
      </div>
    </>
  );
}
export default Home;