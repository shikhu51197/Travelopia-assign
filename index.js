const desc =
  "Armenia is a mountainous nation in West Asia, a former Soviet Republic, and was one of the first Christian nations, embracing Christianity in the fourth century. This rich cultural and natural environment makes it an exciting destination for a wide range of adventure, activity, and walking holidays. <br /> <br /> There are many pagan sites to visit as well as UNESCO World Heritage - listed churches, which are–almost without exception–built in stunning locations.Surrounded by forests, perched on the top of dramatic gorges or silhouetted before snow - capped mountains, they draw us to magnificent open spaces filled with a huge variety of trees and wild flowers.On Armenia tours we see wonderful mountains, lakes, and waterfalls in the countryside–and relish cooling breezes– while the cafés and restaurants of the country’ s capital, Yerevan, are proof of an emerging economy. Mount Ararat towers majestically over the city, and beautiful scenery is plentiful.";

let state = true;

const handleClick = () => {
  document.querySelector(".description>p").innerHTML = !state
    ? desc.substring(0, 201) + "..."
    : desc;

  document.querySelector(".description>button>span").innerText = state
    ? "Show Less"
    : "Show More";

  document.querySelector(".description>button>i").classList = state
    ? "fa-solid fa-arrow-up"
    : "fa-solid fa-arrow-down";

  state = !state;
};
document
  .querySelector(".description>button")
  .addEventListener("click", handleClick);

let w = window.innerWidth;

if (w > 1000) {
  document.querySelector(".description>p").innerHTML = desc;
} else {
  document.querySelector(".description>p").innerHTML =
    desc.substring(0, 201) + "...";
}
