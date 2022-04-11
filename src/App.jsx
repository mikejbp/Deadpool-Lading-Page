import { ThemeProvider} from '@mui/styles';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Pages/Home';


const App = () => {

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App;
