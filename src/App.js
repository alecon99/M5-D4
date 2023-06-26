import React from "react";
import NavigationBar from "./components/NavigationBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <>
      <NavigationBar />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </>
  );
}

export default App;
