import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';

function Home() {
    const name = "John Doe";
  return (
    <>
      <Navbar />
      <Hero pagename = "Home Page" /> 
      <h1>Home Page</h1>
      <p>This is the home page of the Vite project.</p>
      <h3>Welcome, {name}!</h3>
    </>
  );
}
export default Home;