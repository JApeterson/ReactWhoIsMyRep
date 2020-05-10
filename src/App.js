import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import { Grid } from "@material-ui/core";
import { getStateRepresentatives, getStateSenators } from './api/getReps'
import Officials from './components/Officials'
import OfficialsInfo from './components/OfficialsInfo'

const App = props => {
  const [state, setState] = useState({
    dropDownOfficial: '',
    apiDown: false,
    usState: '',
    retrieved: false,
    submitting: false,
    allReps: [],
    allSenators: [],
    officialSelected: false,
    officialsInfo: []
  })
  const handleDropDowns = name => event => {
    setState({ ...state, [name]: event.target.value });
  }
  const openOfficialsInfo = (aSelectedOfficialsInfo) => event => {
    setState({ ...state, officialSelected: true, officialsInfo: [aSelectedOfficialsInfo] })
    // event.preventDefault()
    // setState({ ...state, officialSelected: true, officialsInfo: aSelectedOfficialsInfo })
  }
  const submit = () => {
    setState({ ...state, submitting: true })
    if (state.dropDownOfficial === "1") {
      getStateRepresentatives(state.usState).then(res => {
        if (res.data.success === false) setState({ ...state, allSenators: [], apiDown: true })
        else { setState({ ...state, allSenators: [], allReps: res.data.results, retrieved: true, submitting: false }) }
      }).catch(err => {
        console.log(err)
      })
    }
    if (state.dropDownOfficial === "2") {
      getStateSenators(state.usState).then(res => {
        if (!res.data.success) setState({ ...state, allReps: [], apiDown: true })
        else { setState({ ...state, allSenators: res.data.results, allReps: [], retrieved: true, submitting: false }) }
      }).catch(err => {
        console.log(err)
      })
    }
  }
  return (
    <div style={{ margin: 20 }} className="App">
      <Form
        dropDownOfficial={state.dropDownOfficial}
        usState={state.usState}
        submit={submit}
        submitting={state.submitting}
        handleDropDowns={handleDropDowns}
      />
      <Grid container justify="space-between" direction="row">
        <Officials
          allReps={state.allReps}
          allSenators={state.allSenators}
          openOfficialsInfo={openOfficialsInfo}
        />
        <OfficialsInfo
          officialsInfo={state.officialsInfo}
        />
      </Grid>
      {state.apiDown && <p>The whoismyrepresentative servers are down.</p>}
    </div>
  );
}

export default App;
