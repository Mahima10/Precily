import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import RedComponents from './Pages/RedComponent';
import GreenComponent from './Pages/GreenComponent';
import PurpleComponent from './Pages/PurpleComponent';
import Select from './Components/Select';
import { retrieveComponentsData, updateComponentData, getAddUpdateCount, deleteComponentData } from "./Api/api-service";

const styles = {
  wrapper: {
    marginLeft: "100px"
  },
  components: {}
};

function App() {

  const [selectedOption, setSelectedOption] = useState("All");
  const [selectedComponent, setSelectedComponent] = useState();
  const [purpleComponentData, setPurpleComponentData] = useState("purpleComponentData");
  const [greenComponentData, setGreenComponentData] = useState("greenComponentData");
  const [redComponentData, setRedComponentData] = useState("redComponentData");
  const [inputData, setInputData] = useState();
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const [countType, setCountType] = useState();

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }

  const handleComponentChange = (selectedComponent) => {
    setSelectedComponent(selectedComponent)
  }

  useEffect(() => {
    retrieveComponentsData().then((records) => {
      console.log("data:: getData::", JSON.stringify(records))
      records.data.forEach(elt => {
        console.log("data:: elt::", JSON.stringify(elt))

        if (elt.name === "redComponent") setRedComponentData(elt.data);
        else if (elt.name === "greenComponent") setGreenComponentData(elt.data);
        else if (elt.name === "purpleComponent") setPurpleComponentData(elt.data);
      })
    });
  }, [selectedOption])

  useEffect(() => {
    getAddUpdateCount().then((records) => {
      setAddCount(records.data.add)
      setUpdateCount(records.data.update)
    });
  }, [countType])

  /**
   * Insert data into table for a selected component.
   */
  const addComponent = () => {
    setAddCount(addCount + 1)
    /**
     * TODO: Will make a delete call to delete a data from a selected component, then will use insert statement to insert data into selected component.
     */
    deleteComponentData(selectedComponent).then((records) => {
      console.log("updateComponent::", JSON.stringify(records))
    });

    // insert query to insert component data into table
  }

  /**
   * Update Component's data
   */
  const updateComponent = () => {
    setUpdateCount(updateCount + 1)
    updateComponentData(selectedComponent, inputData).then((records) => {
      console.log("updateComponent::", JSON.stringify(records))
      if (selectedOption === "redComponent") setRedComponentData(inputData);
      else if (selectedOption === "greenComponent") setGreenComponentData(inputData);
      else if (selectedOption === "purpleComponent") setPurpleComponentData(inputData);
    });
  }

  return (
    <div style={styles.wrapper}>
      <h1>Precily</h1>
      <text> add count </text>
      <input type="text" value={addCount} />

      <text> update count </text>
      <input type="text" value={updateCount} />

      <div style={{ flex: 1, flexDirection: 'row', display: 'flex', paddingBottom: 20, paddingTop: 50 }}>
        <Select onChange={(selectedOption) => { handleChange(selectedOption) }} />
        <button onClick={() => addComponent()}> ADD </button>
        <button onClick={() => updateComponent()}> UPDATE </button>
        <text style={{ margin: 10, paddingLeft: 50 }}> Input add/update data </text>
        <input type="text" style={{ margin: 10, paddingLeft: 50 }} name="input text" onChange={(data) => setInputData(data)} />
      </div>


      <div style={styles.components}>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <RedComponents data={redComponentData} />
              <GreenComponent data={greenComponentData} />
              <PurpleComponent data={purpleComponentData} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;