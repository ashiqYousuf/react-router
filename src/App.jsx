import React, { Fragment } from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Layout from './components/Layout';
import Post from './components/pages/Post';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import User from './components/pages/User';


export default function App() {
    const [token, setToken] = React.useState(null);

    React.useEffect(() => {
        const tkn = window.localStorage.getItem("token");
        tkn && setToken(tkn);
    }, []);

    // Learning Nested Routes
    // return (
    //     <>
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path="/" element={<Layout/>}>
    //                     <Route index element={<Home/>} />
    //                     <Route path="about" element={<About/>} />
    //                     <Route path="contact" element={<Contact/>} />
    //                     <Route path="post" element={<Post/>} />
    //                 </Route>
    //             </Routes>
    //         </BrowserRouter>
    //     </>
    // )

    const data = [
        {
            id: 7219473,
            name: "Ashiq"
        },
        {
            id: 1220194,
            name: "Hussain"
        }
    ];

    return (
        <>
            <BrowserRouter>
                <Layout />
                {
                    data.map((user) => {
                        return <Fragment key={user.id}><NavLink to={`user/${user.id}`}>{user.name}</NavLink></Fragment>
                    })
                }
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/post/:category' element={<Post/>} />
                    <Route path='/user/:id' element={<User/>} />
                    {/* <Route path='/post/:category/:id' element={<Post/>} /> */}
                    <Route path="/dashboard" element={ token ? <Dashboard data={{name: "Ashiq Hussain Kumar"}} setToken={setToken} /> : <Navigate to="/login" replace />} />
                    <Route path="/login" element={!token ? <Login data={{msg: "Please Login"}} setToken={setToken}/> : <Navigate to="/dashboard"  replace />} />
                    <Route path='*' element={<h1>404 Page Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
