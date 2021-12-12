import CompanyHeader from '../components/Main/CompanyHeader';
import JobDescription from '../components/Main/JobDescription';
import JobBottomBanner from '../components/Footer/JobBottomBanner';

import jobsData from '../assets/data.json';

import { Navigate, useParams } from 'react-router-dom';

const JobPage = () => {
  let { jobId } = useParams();

  const currentJobPage = jobsData.find((jobData) => jobData.id === +jobId);

  return (
    <>
      {!currentJobPage && <Navigate replace to='/not-found' />}
      {currentJobPage && (
        <>
          <main>
            <CompanyHeader
              logo={currentJobPage.logo}
              logoBackground={currentJobPage.logoBackground}
              company={currentJobPage.company}
              website={currentJobPage.website}
            />
            <JobDescription {...currentJobPage} />
          </main>
          <footer>
            <JobBottomBanner
              company={currentJobPage.company}
              position={currentJobPage.position}
              apply={currentJobPage.apply}
            />
          </footer>
        </>
      )}
    </>
  );
};

export default JobPage;
