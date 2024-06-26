import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";
import DoReservation from "./pages/DoReservation";
import Reservation from "./pages/Reservation";

import Map from "./pages/Map";
import Contact from "./pages/Contact";
import EmailSent from "./pages/EmailSent";
import EmailError from "./pages/EmailError";
import FiltrePage from "./pages/FilterPages";
import Profil from "./pages/Profil";
import BornesListe from "./pages/BornesListe";

import SignIn from "./pages/Auth/SignIn";
import SuccessAuth from "./pages/Auth/SuccessAuth";
import DeleteAccount from "./pages/Account/DeleteAccount";
import SignUp from "./pages/Register";

import AdminPanel from "./pages/AdminPanel";
import AdminUtilisateur from "./pages/AdminUtilisateur";
import AdminBorne from "./pages/AdminBorne";
import AdminAddBornes from "./pages/AdminAddBornes";
import AdminAddVehicule from "./pages/AdminAddVehicule";
import RegisterSuccess from "./pages/Auth/registerSuccess";
import AddBornesSuccess from "./pages/Account/addBornesSuccess";
import AddVehicule from "./pages/Account/addVehicule";
import AddYourVehicule from "./pages/Auth/addYourVehicule";
import AddVehiculeSuccess from "./pages/Auth/addVehiculeSuccess";
import ReservationSuccess from "./pages/Auth/reservationSuccess";
import SuppressVehiculeSuccess from "./pages/Auth/suppressVehiculeSuccess";
import AdminVehiculeList from "./pages/adminVehiculeList";
import AdminChangeUser from "./pages/AdminChangeUser";
import MyVehicule from "./pages/MyVehicule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
      {
        path: "/liste-utilisateurs",
        element: <AdminUtilisateur />,
      },
      {
        path: "/liste-bornes",
        element: <AdminBorne />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },
      {
        path: "/reservations",
        element: <Reservation />,
      },
      {
        path: "/ajout-bornes",
        element: <AdminAddBornes />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/email-sent",
        element: <EmailSent />,
      },
      {
        path: "/email-error",
        element: <EmailError />,
      },
      {
        path: "/filter",
        element: <FiltrePage />,
      },
      {
        path: "/bornesListe",
        element: <BornesListe />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/success-auth",
        element: <SuccessAuth />,
      },
      {
        path: "/account/delete",
        element: <DeleteAccount />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/registerSuccess",
        element: <RegisterSuccess />,
      },
      {
        path: "/addBornesSuccess",
        element: <AddBornesSuccess />,
      },
      {
        path: "/adminAddVehicule",
        element: <AdminAddVehicule />,
      },
      {
        path: "/addVehicule",
        element: <AddVehicule />,
      },
      {
        path: "/DoReservation",
        element: <DoReservation />,
      },
      {
        path: "/AddYourVehicule",
        element: <AddYourVehicule />,
      },
      {
        path: "/addVehiculeSuccess",
        element: <AddVehiculeSuccess />,
      },
      {
        path: "/reservationSuccess",
        element: <ReservationSuccess />,
      },
      {
        path: "/AdminVehiculeList",
        element: <AdminVehiculeList />,
      },
      {
        path: "/MyVehicule",
        element: <MyVehicule />,
      },
      {
        path: "/SuppressVehiculeSuccess",
        element: <SuppressVehiculeSuccess />,
      },
      {
        path: "/AdminChangeUser",
        element: <AdminChangeUser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
