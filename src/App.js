import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import useFetchJobs from "./components/api/useFetchJobs";
import JobPagination from "./components/JobPagination/JobPagination"; 
import SearchForm from "./components/SearchForm/SearchForm";
import Job from "./components/Job/job";
import { Container } from "react-bootstrap";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  const handleParamChange = (e) => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    } )
  };

  return (
    <Container className="my-5">
      <IconContext.Provider svg={{ verticalAlign: "initial"}}>
        <h1 className="text-center mb-4"> <GoMarkGithub /> Jobs</h1>
      </IconContext.Provider>
      <SearchForm params={params} onParamChange={handleParamChange} />
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
