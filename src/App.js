import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    consultAPI();
    // eslint-disable-next-line
  }, []);

  const consultAPI = async () => {
    try {
      const response = await fetch(URL);
      if (response.status === 200) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header></Header>
      <ContactList contacts={contacts}></ContactList>
      <Footer></Footer>
    </div>
  );
}

export default App;
