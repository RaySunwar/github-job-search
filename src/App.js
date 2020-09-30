import React, { useState } from 'react';
import { GoMarkGithub } from "react-icons/go"
import useFetchJobs from './components/api/useFetchJobs';
import JobPagination from './components/JobPagination/JobPagination'; 
import Job from "./components/Job/job";
import { Container } from "react-bootstrap";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4"> <GoMarkGithub /> Jobs</h1>
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error 404. Try Refreshing.</h1>}
      {jobs.map(job=> {
            return <Job key={job.id} job={job} />
          }
        )
      }
      <JobPagination page={page} setPage={setPage} hasNextPage={true} />
    </Container>
  );  
};

export default App;
