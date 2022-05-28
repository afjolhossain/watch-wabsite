import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import CountClients from "../CountClients/CountClients";
import ExtraSection from "../extraSection/ExtraSection";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <CountClients></CountClients>
      <ExtraSection></ExtraSection>

      <ClientReview></ClientReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
