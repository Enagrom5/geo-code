import "../../scss/pages.scss";
import Lottie from "react-lottie-player";
import LogInProgress from "../../assets/LottieFiles/LogIn.json";
import ScrollToTop from "../ResetScrollOnPage";

function suppressVehiculeSuccess() {
  setTimeout(() => {
    window.location.href = "/profil";
  }, 1800);

  return (
    <section>
      <ScrollToTop />
      <div className="containererror">
        <Lottie
          loop={false}
          animationData={LogInProgress}
          play
          style={{ width: 120, height: 120 }}
        />
        <h1>Supression du véhicule en cours </h1>
      </div>
    </section>
  );
}

export default suppressVehiculeSuccess;
