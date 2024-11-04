import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import AOS from 'aos';

import 'aos/dist/aos.css';
import "./Styles/bootstrap.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";


import { Routes, Route } from "react-router-dom";
import Login from './Components/Onboarding/Login';
import "./Styles/Style.css";
import TestReport from './Components/CG/TestReport';
import Dashboard from './Components/LMS/Dashboard';
import Leads from './Components/LMS/Leads/Leads';
import AddLead from './Components/LMS/Leads/AddLead';
import SourceMaster from './Components/LMS/Masters/SourceMaster';
import ParameterValueMaster from './Components/LMS/Masters/ParameterValueMaster';
import FollowupLeads from './Components/LMS/Follow-Up/FollowupLeads';
import AddFollowupEntry from './Components/LMS/Follow-Up/AddFollowupEntry';
import Role from './Components/LMS/Masters/Role';
import ForgotPassword from './Components/Onboarding/ForgotPassword';
import Branch from './Components/LMS/Masters/Branch';
import Region from './Components/LMS/Masters/Region';
import Division from './Components/LMS/Masters/Division';
import ProductLine from './Components/LMS/Masters/ProductLine';
import RoleMapping from './Components/LMS/Menu/RoleMapping';
import ProductGroup from './Components/LMS/Masters/ProductGroup';
import UserRoleMapping from './Components/LMS/Masters/UserRoleMapping';
import UserProductLineMapping from './Components/LMS/Masters/UserProductLineMapping';
import UserBranchMapping from './Components/LMS/Masters/UserBranchMapping';
import UserDivisionMapping from './Components/LMS/Masters/UserDivisionMapping';
import AllRoleMappings from './Components/LMS/Menu/AllRoleMappings';
import ServiceGroupMaster from './Components/LMS/Masters/ServiceGroupMaster';
import Product from './Components/LMS/Masters/Product';
import Customer from './Components/LMS/Customer Masters/Customer';
import DefectCategory from './Components/LMS/Customer Masters/DefectCategory';
import Defect from './Components/LMS/Customer Masters/Defect';
import CustomerwiseAssets from './Components/LMS/Customer Masters/CustomerwiseAssets';
import UserMaster from './Components/LMS/Masters/UserMaster';
import Vendor from './Components/LMS/Masters/Vendor';
import Technician from './Components/LMS/Masters/Technician';
import Dealer from './Components/LMS/Masters/Dealer';
import ASC from './Components/LMS/Masters/ASC';
import AddCustomer from './Components/Onboarding/AddCustomer';
import EditLead from './Components/LMS/Leads/EditLead';
import ViewLead from './Components/LMS/Leads/ViewLead';
import ASCWisePincode from './Components/LMS/Masters/ASCWisePincode';
import ViewFup from './Components/LMS/Follow-Up/ViewFup';
import ChangePassword from './Components/Onboarding/ChangePassword';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import GeocodeComponent from './Components/CG/GeocodeComponent';
import RateMaster from './Components/LMS/Masters/RateMaster';
import Navbar from './Components/CG/Navbar';
import NavBar from './Components/CG/Navbar';
import Home from './Components/CG/home';
import { usePathName } from './constants/index';
import RegisterProduct from './Components/CG/Register Product Warranty/RegisterProduct';
import TemplateSms from './Components/CG/Warranty Master/templateSms&Mail';
import NotRegisteredForWarranty from './Components/CG/Register Product Warranty/NotRegisteredForWarranty';
import WarrantyVerification from './Components/CG/Deviation/WarrantyVerification';
import ProductDeviation from './Components/CG/Deviation/ProductDeviation';
import ProductRegistration from './Components/CG/Reports/ProductReg';
import RaiseRequest from './Components/CG/Service Raise Ticket/RaiseRequest';
import EndCustomer from './Components/CG/Service Raise Ticket/EndCustomers';
import ProductNotUnderWarrantyRegistered from './Components/CG/Service Raise Ticket/ProductNotUnderWarranty';
import DealerAndOem from './Components/CG/Service Raise Ticket/Dealer&Oem';
import DealerSelfAndStock from './Components/CG/Service Raise Ticket/DealerSelfStock';
import Retailer from './Components/CG/Service Raise Ticket/Retailer';
import Deviation from './Components/LMS/Masters/Deviation';
import ProductCustomerDetails from './Components/CG/Reports/ProductCustDetails';
import ServiceTicketInfo from './Components/CG/Reports/ServiceTicketInfo';
import ASCUpload from './Components/CG/Warranty Master/ASCUpload';
import CallCenter from './Components/CG/Call Center Complaint/CallCenter';
import ServiceRequest from './Components/CG/ASC/ServiceRequest';
import Status from './Components/LMS/Masters/Status';
import SubStatus from './Components/LMS/Masters/SubStatus';
import FHP from './Components/CG/JobSheets/FHP';
import Activity from './Components/LMS/Masters/Activity';
import AssignRequest from './Components/CG/ASC/AssignRequest';
import Issue from './Components/LMS/Masters/Issue';
import ASMRequests from './Components/CG/ASM/ASMRequests';
import DashboardASM from './Components/CG/ASM/ASMDashboard';
import TrackServiceRequest from './Components/CG/Track Service Request/trackServiceRequest';
import Servicefeedback from './Components/CG/Track Service Request/servicefeedback';
import CPJobSheet from './Components/CG/JobSheets/CPJobSheet';
import PrintFHP from './Components/CG/JobSheets/PrintFHP';
import NewServiceRequest from './Components/CG/ASC/NewServiceRequest';
import NewAssignRequest from './Components/CG/ASC/NewAssignRequest';
import FirScreen from './Components/CG/ASC/newFir';
import FeedbackReport from './Components/CG/Reports/FeedbackReport';
import ASCDashboard from './Components/CG/Dashboard/ASCDashboard';
import RSMDashboard from './Components/CG/Dashboard/RSMDashboard';
import AISHDashboard from './Components/CG/Dashboard/AISHDashboard';
import CommonDashboard from './Components/CG/Dashboard/AISHDashboard';
import DCJobsheet from './Components/CG/JobSheets/DCJobsheet';
import PrintDC from './Components/CG/JobSheets/PrintDC';
import PrintAlternator from './Components/CG/JobSheets/PrintAlternator';
import PrintAC from './Components/CG/JobSheets/PrintAC';
import NewASC from './Components/CG/ASC/NewASC';
import NewAssign from './Components/CG/ASC/NewAssign';
import NewAssignRequestInt from './Components/CG/ASC/NewAssignRequestInt';
import ServiceRequestReport from './Components/CG/ASC/ServiceReqestReport';
import ClaimApprovalASM from './Components/CG/ASC/ClaimApprovalASM';
import ViewClaimApprovalASM from './Components/CG/ASC/ViewClaimApprovalASM';
import IBNGeneration from './Components/CG/ASC/IBNgeneration';
import IBNCopy from './Components/CG/ASC/IBNCopy';
import ClaimApprovalASMView from './Components/CG/ASC/ClaimApprovalASMView';
import SpecialApprovalList from './Components/CG/ASC/SpecialApprovalList';
import NewAssignRequestIntASM from './Components/CG/ASC/NewAssignRequestIntASM';
import ApprovalLevel from './Components/LMS/Masters/ApprovalLevel';
import ServiceRequestCancelled from './Components/CG/ASC/ServiceRequestCancelled';




function App() {

  const pathName = usePathName();

  let token = localStorage.getItem("UserToken");

  useEffect(() => {
    AOS.init({
      duration: 2000
    });



  }, []);

  const navigate = useNavigate();







  // const expiryTime = "2024-04-11T13:11:43.9516976+05:30";


  let expTime = localStorage.getItem("expiryTime");


  useEffect(() => {
    const checkExpiry = setInterval(() => {
      const currentTime = new Date();
      const expiry = new Date(expTime);
      const timeDifference = expiry - currentTime;

      const fiveMinutesInMillis = 5 * 60 * 1000;

      if (expTime && timeDifference <= fiveMinutesInMillis && timeDifference > 0) {
        // alert("Token will be expired in 5 minutes");
        Swal.fire({
          icon: "warning",
          title: "Your login will be expired in 5 minutes!",
          text: "Do you want to continue with this login?",
          confirmButtonText: "Yes",
          showDenyButton: true,
          denyButtonText: "No",
          backdrop: false,

          preConfirm: () => {
            if (token) {
              fetch(`${process.env.REACT_APP_API_URL}Lead/GetAllLeadsDashboard`, {
                headers: {
                  "Authorization": `Bearer ${token}`
                }
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result[0]);


                })
            }
          },
          // preDeny:()=>{
          //   window.localStorage.clear()
          //   navigate("/SP")
          // }
        })
        clearInterval(checkExpiry);
      }
      else if (expTime && timeDifference <= 0) {
        // alert("Login session has expired");
        window.localStorage.clear()
        Swal.fire({
          icon: "error",
          title: "System timeout!",
          text: "Please login again!",
          backdrop: false
        })
        navigate(`${pathName}`)
        clearInterval(checkExpiry);
      }
      // console.log("token");
    }, 1000);

    return () => {
      clearInterval(checkExpiry);
    };
  }, []);





  return (
    <div className="App">
      {/* <Sidebar /> */}



      {
        token ?
          <Sidebar>
            <Routes>
              {/* <Route path={`${pathName}`} element={<Login />} /> */}
              <Route path={`${pathName}/testGrid`} element={<TestReport />} />
              <Route path={`${pathName}/geocode`} element={<GeocodeComponent />} />
              <Route path={`${pathName}/sbar`} element={<Sidebar />} />
              <Route path={`${pathName}/dashboard`} element={<Dashboard />} />
              <Route path={`${pathName}/asc-dashboard`} element={<ASCDashboard />} />
              <Route path={`${pathName}/rsm-dashboard`} element={<RSMDashboard />} />
              <Route path={`${pathName}/aish-dashboard`} element={<AISHDashboard />} />
              <Route path={`${pathName}/common-dashboard`} element={<CommonDashboard />} />
              {/* <Route path={`${pathName}/asc-dashboard`} element={<DashboardASC />} /> */}
              <Route path={`${pathName}/leads`} element={<Leads />} />
              <Route path={`${pathName}/add-lead`} element={<AddLead />} />
              <Route path={`${pathName}/edit-lead`} element={<EditLead />} />
              <Route path={`${pathName}/view-lead`} element={<ViewLead />} />
              <Route path={`${pathName}/src-master`} element={<SourceMaster />} />
              <Route path={`${pathName}/pv-master`} element={<ParameterValueMaster />} />
              <Route path={`${pathName}/fup-leads`} element={<FollowupLeads />} />
              <Route path={`${pathName}/view-fup`} element={<ViewFup />} />
              <Route path={`${pathName}/add-fup`} element={<AddFollowupEntry />} />
              <Route path={`${pathName}/role-master`} element={<Role />} />
              <Route path={`${pathName}/branch-master`} element={<Branch />} />
              <Route path={`${pathName}/region-master`} element={<Region />} />
              <Route path={`${pathName}/division-master`} element={<Division />} />
              <Route path={`${pathName}/approval-level-master`} element={<ApprovalLevel />} />
              <Route path={`${pathName}/status-master`} element={<Status />} />
              <Route path={`${pathName}/substatus-master`} element={<SubStatus />} />
              <Route path={`${pathName}/issue-master`} element={<Issue />} />
              <Route path={`${pathName}/activity-master`} element={<Activity />} />
              <Route path={`${pathName}/claim-approval`} element={<ClaimApprovalASM />} />
              <Route path={`${pathName}/claim-approval-view`} element={<ClaimApprovalASMView />} />
              <Route path={`${pathName}/view-claim-approval`} element={<ViewClaimApprovalASM/>} />
              <Route path={`${pathName}/productline-master`} element={<ProductLine />} />
              <Route path={`${pathName}/forgot-password`} element={<ForgotPassword />} />
              <Route path={`${pathName}/change-password`} element={<ChangePassword />} />

              <Route path={`${pathName}/role-map`} element={<RoleMapping />} />
              <Route path={`${pathName}/role-map-list`} element={<AllRoleMappings />} />
              <Route path={`${pathName}/productgrp-master`} element={<ProductGroup />} />
              {/* <Route path='/user-role-map-master' element={<UserRoleMapping/>}/>
        <Route path='/user-pline-map-master' element={<UserProductLineMapping/>}/>
        <Route path='/user-branch-map-master' element={<UserBranchMapping/>}/>
        <Route path='/user-division-map-master' element={<UserDivisionMapping/>}/> */}
              <Route path={`${pathName}/service-grp-master`} element={<ServiceGroupMaster />} />
              <Route path={`${pathName}/product-master`} element={<Product />} />
              <Route path={`${pathName}/user-master`} element={<UserMaster />} />
              <Route path={`${pathName}/vendor-master`} element={<Vendor />} />
              <Route path={`${pathName}/technician-master`} element={<Technician />} />
              <Route path={`${pathName}/dealer-master`} element={<Dealer />} />
              <Route path={`${pathName}/asc-master`} element={<ASC />} />
              <Route path={`${pathName}/add-customer`} element={<AddCustomer />} />
              <Route path={`${pathName}/asc-pincode`} element={<ASCWisePincode />} />
              <Route path={`${pathName}/rate-master`} element={<RateMaster />} />
              <Route path={`${pathName}/ibn-management`} element={<IBNGeneration />} />
              <Route path={`${pathName}/special-approval`} element={<SpecialApprovalList />} />
              <Route path={`${pathName}/ibn-copy`} element={<IBNCopy />} />


              {/* -----------------------------Customer Masters--------------------------- */}
              <Route path={`${pathName}/customer-master`} element={<Customer />} />
              <Route path={`${pathName}/defect-cat-master`} element={<DefectCategory />} />
              <Route path={`${pathName}/defect-master`} element={<Defect />} />
              <Route path={`${pathName}/customer-assets-master`} element={<CustomerwiseAssets />} />
              {/* <Route path={'/'} element={<Home />} /> */}
              {/* <Route path={'/navbar'} element={<Navbar />} /> */}

              {/* -------------------------------CG Routes------------------------- */}
              <Route path={`${pathName}/reg-prod-Warranty`} element={<RegisterProduct />} />
              <Route path={`${pathName}/template`} element={<TemplateSms />} />
              <Route path={`${pathName}/not-reg-for-warranty`} element={<NotRegisteredForWarranty />} />
              <Route path={`${pathName}/warranty-verification`} element={<WarrantyVerification />} />
              <Route path={`${pathName}/prod-deviation`} element={<ProductDeviation />} />
              <Route path={`${pathName}/product-registration`} element={<ProductRegistration />} />
              <Route path={`${pathName}/feedback-report`} element={<FeedbackReport />} />
              <Route path={`${pathName}/product-cust-det`} element={<ProductCustomerDetails />} />
              <Route path={`${pathName}/service-ticket-info`} element={<ServiceTicketInfo />} />


              <Route path={`${pathName}/deviation-master`} element={<Deviation />} />
              <Route path={`${pathName}/asc-excel`} element={<ASCUpload />} />
              <Route path={`${pathName}/call-center`} element={<CallCenter />} />

              {/*--------------------- ASC Flow----------------------- */}
              <Route path={`${pathName}/service-request`} element={<ServiceRequest />} />
              <Route path={`${pathName}/service-request-cancelled`} element={<ServiceRequestCancelled />} />
              <Route path={`${pathName}/service-request-report`} element={<ServiceRequestReport />} />

              <Route path={`${pathName}/fhp-js`} element={<FHP />} />
              <Route path={`${pathName}/cp-jobsheet`} element={<CPJobSheet />} />
              <Route path={`${pathName}/fhp-jobsheet`} element={<PrintFHP />} />
              <Route path={`${pathName}/dc-jobsheet`} element={<PrintDC />} />
              <Route path={`${pathName}/ac-jobsheet`} element={<PrintAC />} />
              <Route path={`${pathName}/alternator-jobsheet`} element={<PrintAlternator />} />
              <Route path={`${pathName}/new-service-request`} element={<NewServiceRequest/>} />
              <Route path={`${pathName}/new-assign-request`} element={<NewAssignRequest/>} />



              PrintFHP
              <Route path={`${pathName}/assign-request`} element={<AssignRequest />} />
              <Route path={`${pathName}/assigned-to-asm-request`} element={<ASMRequests />} />

              {/*--------------------- ASM Flow----------------------- */}
              <Route path={`${pathName}/asm-dashboard`} element={<DashboardASM />} />
              {/*------------------ TrackServiceRequest--------------- */}

              <Route path={`${pathName}/track-request`} element={<TrackServiceRequest />} />
              <Route path={`${pathName}/service-feedback`} element={<Servicefeedback/>} />


              <Route path={`${pathName}/fir-screen`} element={<FirScreen/>} />
              {/* <Route path={`${pathName}/asc-screen`} element={<NewASC/>} /> */}
              <Route path={`${pathName}/New-assign`} element={<NewAssign/>} />
              <Route path={`${pathName}/New-assign-req-int`} element={<NewAssignRequestInt/>} />
              <Route path={`${pathName}/New-assign-req-int-asm`} element={<NewAssignRequestIntASM/>} />




            </Routes>
          </Sidebar> :
          <Routes>
            <Route path={`${pathName}`} element={<Login />} />
            <Route path={`${pathName}/testGrid`} element={<TestReport />} />
            <Route path={`${pathName}/geocode`} element={<GeocodeComponent />} />
            <Route path={`${pathName}/sbar`} element={<Sidebar />} />
            <Route path={`${pathName}/dashboard`} element={<Dashboard />} />
            <Route path={`${pathName}/asc-dashboard`} element={<ASCDashboard/>} />
            <Route path={`${pathName}/rsm-dashboard`} element={<RSMDashboard />} />
            <Route path={`${pathName}/aish-dashboard`} element={<AISHDashboard />} />
            <Route path={`${pathName}/common-dashboard`} element={<CommonDashboard />} />
            <Route path={`${pathName}/leads`} element={<Leads />} />
            <Route path={`${pathName}/add-lead`} element={<AddLead />} />
            <Route path={`${pathName}/edit-lead`} element={<EditLead />} />
            <Route path={`${pathName}/view-lead`} element={<ViewLead />} />
            <Route path={`${pathName}/src-master`} element={<SourceMaster />} />
            <Route path={`${pathName}/pv-master`} element={<ParameterValueMaster />} />
            <Route path={`${pathName}/fup-leads`} element={<FollowupLeads />} />
            <Route path={`${pathName}/view-fup`} element={<ViewFup />} />
            <Route path={`${pathName}/add-fup`} element={<AddFollowupEntry />} />
            <Route path={`${pathName}/role-master`} element={<Role />} />
            <Route path={`${pathName}/branch-master`} element={<Branch />} />
            <Route path={`${pathName}/region-master`} element={<Region />} />
            <Route path={`${pathName}/division-master`} element={<Division />} />
            <Route path={`${pathName}/approval-level-master`} element={<ApprovalLevel />} />
            <Route path={`${pathName}/status-master`} element={<Status />} />
            <Route path={`${pathName}/substatus-master`} element={<SubStatus />} />
            <Route path={`${pathName}/issue-master`} element={<Issue />} />
            <Route path={`${pathName}/activity-master`} element={<Activity />} />
            <Route path={`${pathName}/claim-approval`} element={<ClaimApprovalASM />} />
            <Route path={`${pathName}/claim-approval-view`} element={<ClaimApprovalASMView />} />
            <Route path={`${pathName}/view-claim-approval`} element={<ViewClaimApprovalASM/>} />
            <Route path={`${pathName}/productline-master`} element={<ProductLine />} />
            <Route path={`${pathName}/forgot-password`} element={<ForgotPassword />} />
            <Route path={`${pathName}/change-password`} element={<ChangePassword />} />

            <Route path={`${pathName}/role-map`} element={<RoleMapping />} />
            <Route path={`${pathName}/role-map-list`} element={<AllRoleMappings />} />
            <Route path={`${pathName}/productgrp-master`} element={<ProductGroup />} />
            {/* <Route path='/user-role-map-master' element={<UserRoleMapping/>}/>
      <Route path='/user-pline-map-master' element={<UserProductLineMapping/>}/>
      <Route path='/user-branch-map-master' element={<UserBranchMapping/>}/>
      <Route path='/user-division-map-master' element={<UserDivisionMapping/>}/> */}
            <Route path={`${pathName}/service-grp-master`} element={<ServiceGroupMaster />} />
            <Route path={`${pathName}/product-master`} element={<Product />} />
            <Route path={`${pathName}/user-master`} element={<UserMaster />} />
            <Route path={`${pathName}/vendor-master`} element={<Vendor />} />
            <Route path={`${pathName}/technician-master`} element={<Technician />} />
            <Route path={`${pathName}/dealer-master`} element={<Dealer />} />
            <Route path={`${pathName}/asc-master`} element={<ASC />} />
            <Route path={`${pathName}/add-customer`} element={<AddCustomer />} />
            <Route path={`${pathName}/asc-pincode`} element={<ASCWisePincode />} />
            <Route path={`${pathName}/rate-master`} element={<RateMaster />} />
            <Route path={`${pathName}/ibn-management`} element={<IBNGeneration />} />
            <Route path={`${pathName}/special-approval`} element={<SpecialApprovalList />} />
            <Route path={`${pathName}/ibn-copy`} element={<IBNCopy />} />


            {/* -----------------------------Customer Masters--------------------------- */}
            <Route path={`${pathName}/customer-master`} element={<Customer />} />
            <Route path={`${pathName}/defect-cat-master`} element={<DefectCategory />} />
            <Route path={`${pathName}/defect-master`} element={<Defect />} />
            <Route path={`${pathName}/customer-assets-master`} element={<CustomerwiseAssets />} />
            <Route path={`${pathName}/home`} element={<Home />} />
            {/* <Route path={'/navbar'} element={<Navbar />} /> */}


            {/* -------------------------------CG Routes------------------------- */}
            <Route path={`${pathName}/reg-prod-Warranty`} element={<RegisterProduct />} />
            <Route path={`${pathName}/template`} element={<TemplateSms />} />
            <Route path={`${pathName}/not-reg-for-warranty`} element={<NotRegisteredForWarranty />} />
            <Route path={`${pathName}/warranty-verification`} element={<WarrantyVerification />} />
            <Route path={`${pathName}/prod-deviation`} element={<ProductDeviation />} />
            <Route path={`${pathName}/product-registration`} element={<ProductRegistration />} />
            <Route path={`${pathName}/feedback-report`} element={<FeedbackReport />} />

            <Route path={`${pathName}/raise-request`} element={<RaiseRequest />} />
            <Route path={`${pathName}/end-customer`} element={<EndCustomer />} />
            <Route path={`${pathName}/warranty-registered`} element={<EndCustomer />} />
            <Route path={`${pathName}/product-not-under-warranty`} element={<ProductNotUnderWarrantyRegistered />} />
            <Route path={`${pathName}/dealer-oem`} element={<DealerAndOem />} />
            <Route path={`${pathName}/dealer-self-stock`} element={<DealerSelfAndStock />} />
            <Route path={`${pathName}/retailer`} element={<Retailer />} />
            <Route path={`${pathName}/deviation-master`} element={<Deviation />} />
            <Route path={`${pathName}/call-center`} element={<CallCenter />} />


            {/*--------------------- ASC Flow----------------------- */}
            <Route path={`${pathName}/service-request`} element={<ServiceRequest />} />
            <Route path={`${pathName}/service-request-cancelled`} element={<ServiceRequestCancelled />} />
            <Route path={`${pathName}/service-request-report`} element={<ServiceRequestReport />} />
            <Route path={`${pathName}/assign-request`} element={<AssignRequest />} />
            <Route path={`${pathName}/new-service-request`} element={<NewServiceRequest/>} />
            <Route path={`${pathName}/new-assign-request`} element={<NewAssignRequest/>} />
            <Route path={`${pathName}/fir-screen`} element={<FirScreen/>} />

            {/*------------------ TrackServiceRequest--------------- */}

            <Route path={`${pathName}/track-request`} element={<TrackServiceRequest />} />
            <Route path={`${pathName}/service-feedback`} element={<Servicefeedback/>} />














          </Routes>


      }

    </div>
  );
}

export default App;
