import GoTrue from 'gotrue-js';
import SignIn from './routes/SignIn';
import Home from './routes/Home';
import { useEffect, useState } from 'react';


const auth = new GoTrue({
  APIUrl: 'https://<your domain name>/.netlify/identity',
  audience: '',
  setCookie: false,
});



function App() {
  const [ isLogged, setIsLogged ] = useState(false);
  const user = auth.currentUser();
  

  useEffect(() => {
    if(user) {
      setIsLogged(true)
    }
  },[user])

  
  return (
    <>

      {isLogged ? <Home /> : <SignIn />}
    </>
  )
}

export default App
