import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../components/Nav";
import db, { auth } from "../firebase";
import {
  getAvatar,
  getRegion,
  getWatchProvider,
  selectAvatar,
  selectRegion,
  selectWatchProvider,
} from "../functions/userSlice";
import "./ProfileScreen.css";
import ComboBox from "react-responsive-combo-box";
import { regions, watchProviders } from "../functions/regions&watchProviders";
import "react-responsive-combo-box/dist/index.css";

function ProfileScreen() {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);
  const avatar = useSelector(selectAvatar);
  const watchProvider = useSelector(selectWatchProvider);
  const [active, setActive] = useState([avatar]);
  const [selectedRegionOption, setSelectedRegionOption] = useState(region);
  const [selectedWatchProviderOption, setSelectedWatchProviderOption] =
    useState(watchProvider);
  const handleClick = (event) => {
    // @ts-ignore
    setActive({ avatar: event.target.src });
  };

  const saveChangesAvatarClick = () => {
    dispatch(getAvatar(active));
    db.collection("User avatar").doc(auth.currentUser?.uid).set(active);
  };

  const saveChangesRegionClick = () => {
    dispatch(getRegion({ region: selectedRegionOption }));
    db.collection("User region")
      .doc(auth.currentUser?.uid)
      .set({ region: selectedRegionOption });
  };

  const saveChangesWatchProviderClick = () => {
    var selectedWatchProvider = watchProviders.filter(
      (watchProvider) =>
        watchProvider.watchProviderName === selectedWatchProviderOption
    )[0];
    dispatch(getWatchProvider(selectedWatchProvider));
    db.collection("User watch provider")
      .doc(auth.currentUser?.uid)
      .set(selectedWatchProvider);
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>

        <h2> Change profile picture</h2>
        <div className={`profileScreen__inline`}>
          <img
            className={`profileScreen__icon `}
            src="https://i.pinimg.com/550x/c1/77/6f/c1776f0a1e4a0a6e357477aed4b5a96e.jpg"
            onClick={handleClick}
            alt=""
          />
          <img
            className={`profileScreen__icon `}
            onClick={handleClick}
            src="https://i.pinimg.com/564x/19/b9/dd/19b9dde17c93c1dfe153e5c8ed7be575.jpg"
            alt=""
          />
          <img
            className={`profileScreen__icon `}
            onClick={handleClick}
            src="https://i.pinimg.com/564x/de/ec/1c/deec1c546541321a20403ad9cb5f5390.jpg"
            alt=""
          />
          <img
            className={`profileScreen__icon `}
            onClick={handleClick}
            src={"https://pbs.twimg.com/media/Ehbp7KZUYAA1nmY.jpg"}
            alt=""
          />
        </div>
        <div className="profileScreen__inline">
          <h4 className="profileScreen__bigiconh2">New profile picture: </h4>
          <img
            className="profileScreen__bigicon"
            // @ts-ignore
            src={active?.avatar || avatar?.avatar}
            alt=""
          />
        </div>
        <button
          className="profileScreen__button"
          onClick={saveChangesAvatarClick}
        >
          Save change
        </button>

        <div className="profileScreen__content">
          <h2>Change region</h2>
          <ComboBox
            className="profilescreen__combobox"
            options={regions}
            renderOptions={(option) => (
              <div key={option} className="comboBoxOption">
                {option}
              </div>
            )}
            onSelect={(option) => setSelectedRegionOption(option)}
            defaultValue={region?.region}
            optionsListMaxHeight={100}
            enableAutocomplete
            style={{
              width: "15%",
            }}
          />
          <button
            className="profileScreen__button"
            onClick={saveChangesRegionClick}
          >
            Save change
          </button>
        </div>
        <div className="profileScreen__content">
          <h2>Change watch provider</h2>
          <ComboBox
            className="profilescreen__combobox"
            options={watchProviders.map(
              (watchProvider) => watchProvider.watchProviderName
            )}
            renderOptions={(option) => (
              <div key={option} className="comboBoxOption">
                {option}
              </div>
            )}
            onSelect={(option) => setSelectedWatchProviderOption(option)}
            defaultValue={watchProvider?.watchProviderName}
            optionsListMaxHeight={100}
            enableAutocomplete
            style={{
              width: "15%",
              minWidth: "150px",
            }}
          />
          <button
            className="profileScreen__button"
            onClick={saveChangesWatchProviderClick}
          >
            Save change
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
