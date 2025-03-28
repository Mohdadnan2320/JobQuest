// // import { Route, Routes, useNavigate } from "react-router-dom";
// // import UploadCard from "./components/UploadCard";
// // import ListOfJobs from "./components/ListOfJobs";
// // import SignIn from "./pages/SignIn";
// // import Signup from "./pages/SignUp";
// // import Navbar from "./components/Navbar";
// // import { useState } from "react";
// // const App = () => {
// //   const navigate = useNavigate();
// //   const [user, setUser] = useState(null);

// //   // Function to handle login
// //   const handleLogin = (userData) => {
// //     console.log("User Logged In:", userData);
// //     localStorage.setItem("user", JSON.stringify(userData));
// //     localStorage.setItem("token", "dummy-token");
// //     navigate("/jobs");
// //   };

// //   // Function to handle signup
// //   const handleSignup = (userData) => {
// //     console.log("User Signed Up:", userData);
// //     navigate("/signin");
// //   };


// //   // Handle user logout
// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //     navigate("/");
// //   };
// //   return (
// //     <>
// //     <Navbar user={user} onLogout={handleLogout} />
// //       <Routes>
// //       <Route path="/" element={<SignIn onSubmit={handleLogin} switchToSignup={() => navigate("/signup")} />} />
// //       <Route path="/signin" element={<SignIn onSubmit={handleLogin} switchToSignup={() => navigate("/signup")} />} />
// //       <Route path="/signup" element={<Signup onSubmit={handleSignup} switchToLogin={() => navigate("/signin")} />} />

// //         <Route path="/upload" element={<UploadCard />} />
// //         <Route path="/jobs" element={<ListOfJobs />} />
// //       </Routes>
// //     </>
// //   );
// // };

// // export default App;


// import { Route, Routes, useNavigate } from "react-router-dom";
// import UploadCard from "./components/UploadCard";
// import ListOfJobs from "./components/ListOfJobs";
// import SignIn from "./pages/SignIn";
// import Signup from "./pages/SignUp";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { useEffect, useState } from "react";

// const App = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   // Load user data on app start
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Function to handle login
//   const handleLogin = (userData) => {
//     console.log("User Logged In:", userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("token", "dummy-token"); // Replace with real token from backend
//     setUser(userData); // Update user state
//     navigate("/jobs");
//   };

//   // Function to handle signup
//   const handleSignup = (userData) => {
//     console.log("User Signed Up:", userData);
//     navigate("/signin");
//   };

//   // Handle user logout
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/");
//   };

//   return (
//     <>
//       <Navbar user={user?.name} onLogout={handleLogout} />
//       <Routes>
//         <Route path="/" element={<SignIn onSubmit={handleLogin} switchToSignup={() => navigate("/signup")} />} />
//         <Route path="/signin" element={<SignIn onSubmit={handleLogin} switchToSignup={() => navigate("/signup")} />} />
//         <Route path="/signup" element={<Signup onSubmit={handleSignup} switchToLogin={() => navigate("/signin")} />} />

//         {/* Protected Routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/upload" element={<UploadCard />} />
//           <Route path="/jobs" element={<ListOfJobs />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default App;


// import { Route, Routes, useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";
// import UploadCard from "./components/UploadCard";
// import ListOfJobs from "./components/ListOfJobs";
// import SignIn from "./pages/SignIn";
// import Signup from "./pages/SignUp";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";

// const App = () => {
//   const navigate = useNavigate();
//   // const [user, setUser] = useState(null);



//   // // Load user data on app start
//   // useEffect(() => {
//   //   const storedUser = localStorage.getItem("user");
//   //   if (storedUser) {
//   //     setUser(JSON.parse(storedUser));
//   //   }
//   // }, []);


//   // const handleLogin = (userData) => {
//   //   console.log("User Logged In:", userData);
//   //   localStorage.setItem("user", JSON.stringify(userData.user)); // Store only user object
//   //   localStorage.setItem("token", userData.token); // Store only the token
//   //   setUser(userData.user); // Update state with only user details
//   //   navigate("/jobs");
//   // };



//   // const handleLogin = (userData) => {
//   //   console.log("User Logged In:", userData);
//   //   localStorage.setItem("user", JSON.stringify(userData.user));
//   //   localStorage.setItem("token", userData.token || "dummy-token"); // Replace with actual token
//   //   setUser(userData.user); // Update state with full user object
//   //   navigate("/jobs");
//   // };


//   // Function to handle signup
//   const handleSignup = (userData) => {
//     console.log("User Signed Up:", userData);
//     navigate("/signin");
//   };

//   // Handle user logout
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     // setUser(null); // Clear user state
//     navigate("/");
//   };

//   return (
//     <>
// <Navbar onLogout={handleLogout} />
//       <Routes>
//         <Route path="/" element={<SignIn  switchToSignup={() => navigate("/signup")} />} />
//         <Route path="/signin"  element={<SignIn  switchToSignup={() => navigate("/signup")} />} />
//         <Route path="/signup" element={<Signup onSubmit={handleSignup} switchToLogin={() => navigate("/signin")} />} />

//         {/* Protected Routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/upload" element={<UploadCard />} />
//           <Route path="/jobs" element={<ListOfJobs />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default App;


import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UploadCard from "./components/UploadCard";
import ListOfJobs from "./components/ListOfJobs";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Load user data from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Convert back to an object
    }
  }, []);

  // Handle user logout
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  //   setUser(null); // Clear user state
  //   navigate("/");
  // };


  // onLogout={handleLogout}
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<SignIn setUser={setUser} switchToSignup={() => navigate("/signup")} />} />
        <Route path="/signin" element={<SignIn setUser={setUser} switchToSignup={() => navigate("/signup")} />} />
        <Route path="/signup" element={<Signup onSubmit={() => navigate("/signin")} switchToLogin={() => navigate("/signin")} />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/upload" element={<UploadCard />} />
          <Route path="/jobs" element={<ListOfJobs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
