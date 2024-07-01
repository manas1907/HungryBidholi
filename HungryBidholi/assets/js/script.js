'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

const chatIcon = document.getElementById("chatIcon");
const chatPopup = document.getElementById("chatPopup");
const closeBtn = document.getElementById("closeBtn");
const sendBtn = document.getElementById("sendBtn");
const chatContent = document.getElementById("chatContent");
const userInput = document.getElementById("userInput");

chatIcon.addEventListener("click", () => {
  chatPopup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  chatPopup.style.display = "none";
});

sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value;
  if (userMessage.trim() !== "") {
    appendMessage(userMessage, "user");
    const botResponse = generateBotResponse(userMessage);
    appendMessage(botResponse, "bot");
    userInput.value = "";
  }
});

function appendMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = sender + "-message";
  messageDiv.textContent = message;
  chatContent.appendChild(messageDiv);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function generateBotResponse(userMessage) {
  const lowercaseMessage = userMessage.toLowerCase();
  let botResponse = "Unable to understand!!";

  if (lowercaseMessage.includes("website")) {
    botResponse = "This website helps you to get the information of all restaurants";
  } else if (lowercaseMessage.includes("pizza") || lowercaseMessage.includes("pizzas")) {
    botResponse = "Domnik Pizza, La Pino'z Pizza are there. You can get the info from the cards.";
  } else if (lowercaseMessage.includes("juices") || lowercaseMessage.includes("shakes")) {
    botResponse = "Shake n Sip is always there for you! Go check out their amazing flavors.";
  } else if (lowercaseMessage.includes("who made this site","owner")) {
    botResponse = "All rights reserved to Manas Kumar Rai.";
  } else if (lowercaseMessage.includes("thank you")) {
    botResponse = "You're welcome!";
  } else if (lowercaseMessage.includes("ok")) {
    botResponse = "Ok.";
  } else if (lowercaseMessage.includes("hi") || lowercaseMessage.includes("hello") || lowercaseMessage.includes("hey")) {
    botResponse = "Hey, I'm your FoodBot.";
  } else if (lowercaseMessage.includes("help")) {
    botResponse = "Tell me how can I help.";
  } else if (lowercaseMessage.includes("name") || lowercaseMessage.includes("site")) {
    botResponse = "This is HungryBidholi, designed and developed for satisfying your late-night cravings.";
  } else if (lowercaseMessage.includes("govt") || lowercaseMessage.includes("government") || lowercaseMessage.includes("legal") || lowercaseMessage.includes("safe") || lowercaseMessage.includes("illegal") || lowercaseMessage.includes("private")) {
    botResponse = "This is a fully private website.";
  }

  return botResponse;
}
