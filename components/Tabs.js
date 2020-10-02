// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from "axios";

// grab entry-point
const topicsDiv = document.querySelector(".topics");

axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((result) => {
    const topics = result.data.topics;
    topics.forEach((topic) => {
      let newTopic = document.createElement("div");
      newTopic.classList.add("tab", topic);
      newTopic.textContent = topic;
      // event listener to toggle topics
      newTopic.addEventListener("click", (e) => {
        const cardList = document.querySelectorAll(".card");
        if (newTopic.classList.contains("active")) {
          cardList.forEach((card) => {
            card.style.display = "flex";
          });
        } else {
          cardList.forEach((card) => {
            if (card.classList.contains(topic)) {
              card.style.display = "flex";
            } else {
              card.style.display = "none";
            }
          });
        }
        newTopic.classList.toggle("active");
      });
      topicsDiv.appendChild(newTopic);
    });
  })
  .catch((error) => {
    console.log(error);
  });
