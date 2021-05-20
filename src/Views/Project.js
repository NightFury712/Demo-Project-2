import React from "react";
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'

const Project = ({changeFormAddPrj, stateRecent,statePrj, changestatePrj, changeStateRecent, changeFormAddIssue, openHomePage}) => {
  return (
      <React.Fragment>
        <Topbar 
          changeFormAddPrj={changeFormAddPrj} 
          stateRecent={stateRecent} 
          statePrj={statePrj} 
          changestatePrj={changestatePrj} 
          changeStateRecent={changeStateRecent}
          changeFormAddIssue={changeFormAddIssue}
          openHomePage={openHomePage}
        />
        <Navbar />
      </React.Fragment>
  );
}

export default Project;

