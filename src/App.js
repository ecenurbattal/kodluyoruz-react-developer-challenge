import { useState } from "react";
import SessionContext from "./contexts/SessionContext";
import Container from "./components/Container/Container";
import Content from "./components/Content/Content";

function App() {

  const [isAuthenticated,setAuthenticated] = useState(!!localStorage.getItem('user'))

  return (
    <SessionContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated
      }}
    >
      <Container>
        <Content/>
      </Container>
    </SessionContext.Provider>
  );
}

export default App;
