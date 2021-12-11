import { createContext, useState } from 'react';

const JobsContext = createContext();

const initialContextValue = {
  filterByInfos: '',
  filterByLocation: '',
  fullTimeOnly: false,
  numOfJobsToShow: 9,
};

const JobsContextProvider = (props) => {
  const [filterByInfos, setFilterByInfos] = useState(
    initialContextValue.filterByInfos
  );
  const [filterByLocation, setFilterByLocation] = useState(
    initialContextValue.filterByLocation
  );
  const [fullTimeOnly, setFullTimeOnly] = useState(
    initialContextValue.fullTimeOnly
  );
  const [numOfJobsToShow, setNumOfJobsToShow] = useState(
    initialContextValue.numOfJobsToShow
  );

  const updateFilterParams = (
    filterByInfosValue,
    filterByLocationValue,
    isFullTimeOnlyChecked
  ) => {
    setFilterByInfos(filterByInfosValue);
    setFilterByLocation(filterByLocationValue);
    setFullTimeOnly(isFullTimeOnlyChecked);
  };

  const updateNumOfJobsToShow = () => {
    setNumOfJobsToShow((prevNumOfJobsToShow) => prevNumOfJobsToShow + 9);
  };

  const contextValue = {
    filterByInfos,
    filterByLocation,
    fullTimeOnly,
    numOfJobsToShow,
    updateFilterParams,
    updateNumOfJobsToShow,
  };

  return (
    <JobsContext.Provider value={contextValue}>
      {props.children}
    </JobsContext.Provider>
  );
};

export { JobsContext };
export default JobsContextProvider;
