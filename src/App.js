import React, { useState } from 'react';
import { GoMarkGithub } from "react-icons/go"
import useFetchJobs from './components/api/useFetchJobs';
import Job from "./components/Job/job";
import { Container } from "react-bootstrap";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container className="my-5">
      <h1 className="text-center"> <GoMarkGithub /> Jobs</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error 404. Try Refreshing.</h1>}
      {jobs.map(job=> {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );  
};

export default App;
