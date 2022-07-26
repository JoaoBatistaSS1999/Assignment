import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import MainContent from "../../components/mainContent";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
      <Footer />
    </React.Fragment>
  );
};
export default Home;
