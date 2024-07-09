import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const DashboardRight = ({ states }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [showDocument, setShowDocument] = useState(false);
  const jobsAppliedData = [16, 32, 43, 49, 56, 62, 87, 143, 44, 27, 55, 99];
  const activeJobsData = [66, 46, 93, 39, 53, 36, 78, 137, 122, 143, 134, 123];
  const callbackData = [0, 1, 2, 10, 11, 17, 26, 43, 73, 13, 9, 32];
  const adjustedJobsAppliedData = jobsAppliedData.map(value => value > 150 ? 150 : value);
  const adjustedActiveJobsData = activeJobsData.map(value => value > 150 ? 150 : value);
  const adjustedCallbackData = callbackData.map(value => value > 150 ? 150 : value);

  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Jobs Applied',
        data: adjustedJobsAppliedData,
        borderColor: '#0A58CA',
        backgroundColor: '#0A58CA',
        fill: false,
      },
      {
        label: 'Active Jobs',
        data: adjustedActiveJobsData,
        borderColor: 'black',
        backgroundColor: 'black',
        fill: false,
      },
      {
        label: 'Callback',
        data: adjustedCallbackData,
        borderColor: 'green',
        backgroundColor: 'green',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 150,
        ticks: {
          stepSize: 15,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      
    },
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelect = (eventKey) => {
    setSelectedMonth(eventKey);
    setShowDocument(true);
  };
  const toggleChartView = () => {
    setShowDocument(false);
  };
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          {states.map((state, index) => (
            <div className="col-lg-3 " key={index}>
              <div
                className="state-container p-2 d-flex justify-content-center gap-3 align-items-center"
                style={{ backgroundColor: state.backgroundColor }}
              >
                <div className="icon-container">
                  <img src={state.icon} alt={state.alt} />
                </div>
                <div className="text-container">
                  <p className=" pb-0">{state.count}</p>
                  <p className=" pb-0">{state.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-4">
            <div className="d-flex justify-content-between align-items-center py-3">
              <h5>Job Statistics Over the Last Twelve Months</h5>
              <Dropdown   isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle className='btn-bg' caret>
                  Select Month
                </DropdownToggle>
                <DropdownMenu>
                  {months.map((month, index) => (
                    <DropdownItem key={index} onClick={() => handleSelect(month)}>{month}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
            {showDocument ? (
              <div className='d-flex justify-content-center align-items-center flex-column my-2 gap-4 py-4 rounded' style={{backgroundColor:"#FFE6E6"}}>
                <h3>{selectedMonth} Data</h3>
                <p>Jobs Applied: {jobsAppliedData[months.indexOf(selectedMonth)]}</p>
                <p>Active Jobs: {activeJobsData[months.indexOf(selectedMonth)]}</p>
                <p>Callbacks: {callbackData[months.indexOf(selectedMonth)]}</p>
                <Button color="primary" onClick={toggleChartView} className="mt-3">Show Chart</Button>
              </div>
            ) : (
              <Line data={data} options={options} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
