import CompanyHeader from '../components/Main/CompanyHeader';
import JobBottomBanner from '../components/Main/JobBottomBanner';
import JobDescription from '../components/Main/JobDescription';

import jobsData from '../assets/data.json';

import { useParams } from 'react-router-dom';

const JobPage = () => {
  const { jobId } = useParams();

  const currentJobPage = jobsData.find((jobData) => jobData.id === +jobId);

  return (
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
        />
      </footer>
    </>
  );
};

export default JobPage;
