import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {Chart} from 'react-google-charts';
import {Link} from 'react-router-dom';
import RegionalLead, {DashboardHeader} from './regional-lead';
import './App.css';
import profilePic from './profile-pic.jpg';

const inOfficeData = [
  ["Team", "Amount in Office"],
  ["LDN", 11],
  ["NY", 6],
  ["JPN", 13],
];

const atHomeData = [
  ["Team", "Amount at Home"],
  ["LDN", 6],
  ["NY", 4],
  ["JPN", 2],
];

const InOfficeOptions = { title: "In-Office Percentages", is3D: true, };
const WFHOptions = { title: "WFH Percentages", is3D: true, };

//styling applied
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    marginTop: 50,
    backgroundColor: "#ADD8E6",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

//hard coded data for graphs
export const data = [
  [
    { type: "string", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  ["26/03", 76, 70, 90, 65, 86, 84, 62],
  ["27/03", 73, 55, 90, 50, 73, 84, 90],
  ["28/03", 75, 55, 90, 70, 67, 83, 89],
  ["29/03", 67.5, 40, 78, 65, 68, 72, 82],
  ["01/04", 70.8, 74, 63, 67, 69, 80, 72],
  ["02/04", 65.6, 79, 52, 71, 48, 64, 80],
  ["03/04", 80.3, 77, 83, 70, 77, 85, 90],
  ["04/04", 72.1, 74, 67, 85, 75, 72, 60],
];

export const options = {
  title: "RTO Progress",
  curveType: "function",
  series: [{ color: "#D9544C" }],
  intervals: { style: "bars" },
  legend: "none",
};

function GlobalLead() {
  //states of modals being acknowledged
  const [modalVisible, setModalVisible] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);

  const openNestedModal = () => {
    setModalVisible(!modalVisible);
    setNestedModal(true);
  };

  function loadRegionalPage(){
    return(
        <RegionalLead/>
    );
  }

  // @ts-ignore
  return (
    <div className="GlobalLead" style={{ backgroundColor: '#90b0ef', color: 'white' }}>
      {DashboardHeader}
      <img src={profilePic} style={{ borderRadius: '50%' }} alt="Profile Picture" width="50" height="50" />
      <header className="Global-Lead">
      </header>
      <div className="row">
        <div className='col-md-4'>
          <Chart
            chartType="PieChart"
            data={inOfficeData}
            options={InOfficeOptions}
            width={"100%"}
            height={"300px"}
          />
        </div>

        <div className='col-md-4'>
          <Chart
            chartType="PieChart"
            data={atHomeData}
            options={WFHOptions}
            width={"100%"}
            height={"300px"}
          />
        </div>
        <div className='col-md-4'>
          <h2>View Regional Boards</h2>
          <ul>
            <li><Link to='/regional-lead-project-page.tsx'>Team1 (LDN)</Link></li>
          </ul>
          <ul>
            <li><Link to='/regional-lead-project-page.tsx'>Team2 (NY)</Link></li>
          </ul>
          <ul>
            <li><Link to='/regional-lead-project-page.tsx'>Team3 (TKY)</Link></li>
          </ul>

          <View style={styles.container}>
            <Button
              title="Contact Regional Management"
              onPress={() => setModalVisible(true)}
            />
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modalView}>
                <Text style={{ marginBottom: 20, fontSize: 20 }} >Which team manager would you like to contact?</Text>
                {/* Need to add in buttons that when clicked allow user to enter text etc */}
                <Button
                  title="Team1"
                  onPress={() => {
                    openNestedModal();
                    setNotif1(true);
                  }
                  }
                />
                <Button
                  title="Team2"
                  onPress={() => {
                    openNestedModal()
                    setNotif2(true);
                  }
                  }
                />
                <Button
                  title="Team3"
                  onPress={() => {
                    openNestedModal();
                    setNotif3(true);
                  }
                  }
                />
                <Button
                  title="Cancel"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
            </Modal>
            <Modal animationType="fade"
              transparent={true} visible={nestedModal} onRequestClose={() => setNestedModal(false)}>
              <View style={styles.modalView}>
                <label>Please write your message.
                <input type = "text" name = "contact"/>
                </label>
                <Button
                  title="Cancel"
                  onPress={() => setNestedModal(!nestedModal)}
                />
              </View>
            </Modal>
          </View>
        </div>
        <div col-md-4>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </div>
      <br/>
      <div>
        <button style={{ backgroundColor: "#C8A2C8"}}><Link to="/log-work-status.tsx">Log Work Status</Link></button>
      </div>
      <div></div>
    </div>
  );
}

export default GlobalLead;
