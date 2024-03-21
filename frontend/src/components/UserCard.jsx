import "../scss/components/user-card.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import UserContext from "../Context/UserContext";
import "reactjs-popup/dist/index.css";

export default function UserCard({ firstname, lastname, img, userData }) {
  const { user, setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const selectedUser = () => {
    setUser(userData);
  };
  // Permet d'ouvrir la popup
  const openPopup = () => {
    setOpen(true);
  };
  const deleteUser = async () => {
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${userData.id}`,
        {
          user,
        },
        { withCredentials: true }
      )
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
    if (message === "Compte supprimé") {
      setTimeout(() => {
        window.location.href = "/liste-utilisateurs";
      }, 3800);
    }
  };
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>
        {firstname} {lastname}
      </h2>

      <Link
        to="/AdminChangeUser"
        className=" blue-button"
        onClick={selectedUser}
      >
        Editer ce profil
      </Link>
      <button type="button" className=" dark-blue-button" onClick={openPopup}>
        Supprimer ce profil
      </button>

      <Popup open={open} closeOnDocumentClick>
        Etes vous sûr de vouloir supprimer ce véhicule?
        <div className="container_button">
          <button type="button" onClick={deleteUser} className="yes">
            Oui
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
            }}
            className="no"
          >
            Non
          </button>
        </div>
        <p>{message}</p>
      </Popup>
    </div>
  );
}

UserCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  userData: PropTypes.func.isRequired,
};
