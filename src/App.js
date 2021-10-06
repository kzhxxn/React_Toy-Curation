import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./components/Layout"
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
    <Layout>
      <Container style={{minHeight:"80vh", padding: 0}}>
        <BrowserRouter>
          <Route path="/" exact component={Main}></Route>
        </BrowserRouter>
     </Container>
    </Layout>
    </>
  );
}

export default App;
