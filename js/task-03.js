const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");

// adds styles to ul list

galleryEl.style.display = "flex";
galleryEl.style.justifyContent = "space-between";

// forms array of images + alts. width added for proper visualisation

const listArray = [];

const listItem = document.createElement("li");

for (let i = 0; i < images.length; i += 1) {
  const imgEl = document.createElement("img");

  imgEl.setAttribute("src", images[i].url);
  imgEl.setAttribute("alt", images[i].alt);
  imgEl.setAttribute("width", 380);

  listArray.push(imgEl);
}

galleryEl.append(...listArray);
