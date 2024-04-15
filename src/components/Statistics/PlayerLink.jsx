function handleClick(playerName) {
  const baseURL = "https://lichess.org/@/";

  const websiteURL = baseURL + encodeURIComponent(playerName);

  window.open(websiteURL, "_blank");
}

export default handleClick;
