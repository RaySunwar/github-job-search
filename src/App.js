import React from 'react';
import useFetchJobs from './components/api/useFetchJobs';
import { Container } from "react-bootstrap";

function App() {
  const { jobs, loading, error } = useFetchJobs();
  return (
    <Container className="App">
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error 404. Try Refreshing.</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
