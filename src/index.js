import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Homepage from './components/Homepage';
import Scopeofbusiness from './components/Scopeofbusiness';
import Designer from './components/Designer';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Interiordesign from './components/Interiordesign';
import Graphicdesign from './components/Graphicdesign';
import Illustration from './components/Illustration';
import Webdesign from './components/Webdesign'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Navigate to="/index"/>}/>
                <Route path="index" element={<Homepage/>} />
                <Route path="page2" element={<Contactus/>} />
                <Route path="page52" element={<Aboutus />} />
                <Route path="page97" element={<Scopeofbusiness />} />
                <Route path="page98" element={<Designer />} />
                <Route path="page127" element={<Interiordesign />} />
                <Route path="page151" element={<Illustration />} />
                <Route path="page152" element={<Graphicdesign />} />
                <Route path="page157" element={<Webdesign />} />
                <Route path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                    </main>
                }/>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();