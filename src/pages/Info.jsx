import {useState, useEffect} from 'react'

import Hero from "../Component/Hero";
import './Info.css'

const UserAPI = "https://jsonplaceholder.typicode.com/users";


function Info() {
    const [User, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

        useEffect(() => {
          const fetchUser = async () => {
            try {
              setLoading(true);
              const response = await fetch(UserAPI);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setUser(data);
              setLoading(false);
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
    
          fetchUser();
        }, []);
    
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error: {error}</p>;
        }
  return (
    <> 
      <Hero pagename = "Info Page" />
      <h1>Info Page</h1>
      <div className="user-container">
        {User.map((user) => (
          <div key={user.id} className="user-card">
            <h4>Full Name: {user.name}</h4>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Street: {user.address.street}</p>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Info;