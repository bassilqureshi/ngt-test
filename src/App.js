import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./component/home";
import HomeNew from "./component/home-new";
import ContactUs from "./component/contact";
import Career from "./component/career";
import CareerNew from "./component/career-new";
import Jobs from "./component/jobs";
import Services from "./component/services";
import NotFound from "./component/not-found";
import About from "./component/about";
import About1 from "./component/about1";
import ManagedItServices from "./component/manageditservices";
import InformationSecurity from "./component/informationsecurity";
import EnterprisePlatformServices from "./component/enterpriseplatformservices";
import EnterpriseInfrastructureServices from "./component/enterpriseinfrastructure";
import EnterprisePlanning from "./component/enterpriseplanning";
import StaffAugmentation from "./component/staffaugmentation";
import TechnologyProcurement from "./component/technologyprocurement";
import Officeinabox from "./component/officeinabox";
import ProjectManagement from "./component/projectmanagement";
import Training from "./component/training";
import HRPortal from "./component/hrportal";
import HRCandidatesList from "./component/hrcandidateslist";
import ApplicantProfilePage from "./component/applicantprofile";
import JobsDetails from "./component/jobdetails";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.css"
import "./fonts/Cera Pro Black.ttf"
import "./fonts/Cera Pro Light.ttf"
import RouteChangeAnimation from "./component/animation/routeChangeAnimation";
import JobFormPage from "./component/jobform";
import Article from "./component/insights/article";
import RegisterProfilePage from "./component/easyapply";
import ApplyThroghResumePage from "./component/applythroughresume";
import HRRegistrationPage from "./component/hrregistration";
import SignUpConfirmationPage from "./component/signupconfirmation";
import SpontaneousCandidatesList from "./component/spontaneouscandidate";
import { Provider } from 'react-redux';
import { store } from './store/store';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize the animation duration here (in ms)
    });
  }, []);

  return (
    <>
    <Provider store={store}>
      <Router>
      <RouteChangeAnimation /> 
        <Layout>
          <Routes>
            <Route path="/" element={<HomeNew />} />
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/home-new" element={<HomeNew />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career-new" element={<CareerNew />} />
            <Route path="/jobs" element={<Jobs />} />
            {/* <Route path="/insights" element={<Insights />} /> */}
            {/* <Route path="/ngtsol-makes-a-strong-impression-at-gitex-global-2023" element={<Insights />} /> */}
            <Route path="/insights" element={<Article />} />
            <Route path="/insights/:article_slug" element={<Article />} />

            {/* <Route path="/insights/ngtsol-joins-visionaries-at-leap-24" element={<ArticleOne />} />
            <Route path="/insights/ngtsol-hosts-london" element={<ArticleTwo />} />
            <Route path="/insights/ngtsol-at-servicenow-knowledge-2024" element={<ArticleThree />} />
            <Route path="/insights/excellence-in-infrastructure-and-cloud-services" element={<ArticleFour />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About1 />} />
            <Route path="/about-new" element={<About />} />
            <Route path="/managed-it-services" element={<ManagedItServices />} />
            <Route path="/information-security" element={<InformationSecurity />} />
            <Route path="/enterprise-platform-services" element={<EnterprisePlatformServices />} />
            <Route path="/enterprise-infrastructure-services" element={<EnterpriseInfrastructureServices />} />
            <Route path="/enterprise-planning" element={<EnterprisePlanning />} />
            <Route path="/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/technology-procurement" element={<TechnologyProcurement />} />
            <Route path="/office-in-a-box" element={<Officeinabox />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/training" element={<Training />} />
            <Route path="/hr-portal" element={<HRPortal />} />
            <Route path="/hr-candidates-list/:jobId" element={<HRCandidatesList/>} />
            <Route path="/applicant-profile/:userId" element={<ApplicantProfilePage/>} />
            {/* <Route path="/applicant-profile" element={<ApplicantProfilePage/>} /> */}
            <Route path="/job-form" element={<JobFormPage/>} />
  
            <Route path="/Job-details/:jobId" element={<JobsDetails/>} />
            <Route path="/register-profile" element={<RegisterProfilePage/>} />
            <Route path="/apply-through-resume" element={<ApplyThroghResumePage/>} />
            <Route path="/hr-registration" element={<HRRegistrationPage/>} />
            <Route path="/signup-confirmation" element={<SignUpConfirmationPage/>} />
            <Route path="/spontaneous-candidate" element={<SpontaneousCandidatesList/>} />

          </Routes>
        </Layout>
      </Router>
      </Provider>
    </>
  );
};

export default App;
