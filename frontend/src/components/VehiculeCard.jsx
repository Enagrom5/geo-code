import "../scss/components/borne-card.scss";
import PropTypes from "prop-types";

export default function VehiculeCard({ nom, prenom, marqueName, modeleName }) {
  return (
    <div className="card_borne">
      <p className="card_borne_name">{nom}</p>
      <p className="card_borne_adresse">{prenom}</p>
      <p className="card_borne_name">{marqueName}</p>
      <p className="card_borne_adresse">{modeleName}</p>
    </div>
  );
}

VehiculeCard.propTypes = {
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  marqueName: PropTypes.string.isRequired,
  modeleName: PropTypes.string.isRequired,
};
