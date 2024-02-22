import LandingPage from "src/components/LandingPage/LandingPage";
import { useAuthentication } from "src/lib/hooks/use-authentication";
import { useLocalContent } from "src/lib/hooks/use-local-content";
import LocalLandingPage from "src/components/LocalLandingPage/LocalLandingPage";
import AboutUs from "src/components/About/About";
import AvailableServices from "src/components/AvailableServices/AvailableServices";


const Home = () => {
  const { isAuthenticated } = useAuthentication();
  const { country } = useLocalContent();

  if (!isAuthenticated || !country)
    return (
      <>
        <LandingPage />
        <AboutUs />
      </>
    );

  return (
    <>
      <LocalLandingPage />
      <AvailableServices />
    </>
  );
};

export default Home;
