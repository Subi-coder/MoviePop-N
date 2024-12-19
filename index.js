var sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-70%";
}

function rightSide() {
  const displayProperty = (document.querySelector(
    ".bestshows"
  ).scrollLeft += 300);
  if (displayProperty > 200) {
    const left = document.querySelector(".fa-solid.fa-arrow-left");
    left.style.display = "block";
  }
}

function leftSide() {
  const displayProperty = (document.querySelector(
    ".bestshows"
  ).scrollLeft -= 300);
  if (displayProperty <= 100) {
    document.querySelector(".bestshows").scrollLeft = 0;
    const left = document.querySelector(".fa-solid.fa-arrow-left");
    left.style.display = "none";
  }
}

function rightSide2() {
  const displayProperty2 = (document.querySelector(
    ".tamilShows"
  ).scrollLeft += 300);
  if (displayProperty2 > 200) {
    const leftTwo = document.getElementById("leftArrow2");
    leftTwo.style.display = "block";
  }
}

function leftSide2() {
  const displayProperty = (document.querySelector(
    ".tamilShows"
  ).scrollLeft -= 300);
  if (displayProperty <= 100) {
    document.querySelector(".tamilShows").scrollLeft = 0;
    const leftTwo = document.getElementById("leftArrow2");
    leftTwo.style.display = "none";
  }
}

function rightSide3() {
  const displayProperty3 = (document.querySelector(
    ".englishShows"
  ).scrollLeft += 300);
  if (displayProperty3 > 200) {
    const leftThree = document.getElementById("leftArrow3");
    leftThree.style.display = "block";
  }
}

function leftSide3() {
  const displayProperty3 = (document.querySelector(
    ".englishShows"
  ).scrollLeft -= 300);
  if (displayProperty3 <= 100) {
    document.querySelector(".englishShows").scrollLeft = 0;
    const leftThree = document.getElementById("leftArrow3");
    leftThree.style.display = "none";
  }
}

function rightSide4() {
  const displayProperty4 = (document.querySelector(
    ".malayalamShows"
  ).scrollLeft += 300);
  if (displayProperty4 > 200) {
    const leftFour = document.getElementById("leftArrow4");
    leftFour.style.display = "block";
  }
}

function leftSide4() {
  const displayProperty4 = (document.querySelector(
    ".malayalamShows"
  ).scrollLeft -= 300);
  if (displayProperty4 <= 100) {
    document.querySelector(".malayalamShows").scrollLeft = 0;
    const leftFour = document.getElementById("leftArrow4");
    leftFour.style.display = "none";
  }
}

function rightSide5() {
  const displayProperty5 = (document.querySelector(
    ".teluguShows"
  ).scrollLeft += 300);
  if (displayProperty5 > 200) {
    const leftFive = document.getElementById("leftArrow5");
    leftFive.style.display = "block";
  }
}

function leftSide5() {
  const displayProperty5 = (document.querySelector(
    ".teluguShows"
  ).scrollLeft -= 300);
  if (displayProperty5 <= 100) {
    document.querySelector(".teluguShows").scrollLeft = 0;
    const leftFive = document.getElementById("leftArrow5");
    leftFive.style.display = "none";
  }
}

function rightSide6() {
  const displayProperty6 = (document.querySelector(
    ".hindiShows"
  ).scrollLeft += 300);
  if (displayProperty6 > 200) {
    const leftSix = document.getElementById("leftArrow6");
    leftSix.style.display = "block";
  }
}

function leftSide6() {
  const displayProperty6 = (document.querySelector(
    ".hindiShows"
  ).scrollLeft -= 300);
  if (displayProperty6 <= 100) {
    document.querySelector(".hindiShows").scrollLeft = 0;
    const leftSix = document.getElementById("leftArrow6");
    leftSix.style.display = "none";
  }
}

function rightSide7() {
  const displayProperty7 = (document.querySelector(
    ".kannadaShows"
  ).scrollLeft += 300);
  if (displayProperty7 > 200) {
    const leftSeven = document.getElementById("leftArrow7");
    leftSeven.style.display = "block";
  }
}

function leftSide7() {
  const displayProperty7 = (document.querySelector(
    ".kannadaShows"
  ).scrollLeft -= 300);
  if (displayProperty7 <= 100) {
    document.querySelector(".kannadaShows").scrollLeft = 0;
    const leftSeven = document.getElementById("leftArrow7");
    leftSeven.style.display = "none";
  }
}

function rightSide8() {
  const displayProperty8 = (document.querySelector(
    ".evergreenShows"
  ).scrollLeft += 300);
  if (displayProperty8 > 200) {
    const leftEight = document.getElementById("leftArrow8");
    leftEight.style.display = "block";
  }
}

function leftSide8() {
  const displayProperty8 = (document.querySelector(
    ".evergreenShows"
  ).scrollLeft -= 300);
  if (displayProperty8 <= 100) {
    document.querySelector(".evergreenShows").scrollLeft = 0;
    const leftEight = document.getElementById("leftArrow8");
    leftEight.style.display = "none";
  }
}

//------------------------------------------------------
//-------------------chatbot----------------------------
const botLogo = document.querySelector(".bot-logo");
const chatInput = document.querySelector(".chat-type");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const refreshChatBtn = document.querySelector(".refresh");
const chatBot = document.querySelector(".chatbot");

chatBot.style.display == "none";
botLogo.addEventListener("click", openChatbot);

function openChatbot() {
  const currentDisplay = window.getComputedStyle(chatBot).display;
  if (currentDisplay == "none") {
    chatBot.style.display = "block";
  } else {
    chatBot.style.display = "none";
  }
}

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  chatLi.innerHTML =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span><img width="32px" src="/images/bot-image.jpg" alt="Movie pop'n image"></span> <p>${message}</p>`;
  return chatLi;
};

const handleChat = (event) => {
  if (
    event.type === "click" ||
    (event.type === "keydown" && event.key === "Enter")
  ) {
    event.preventDefault();
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatBox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = ""; // Clear input

    // Bot response after a delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      chatBox.appendChild(createChatLi(botResponse, "incoming"));
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }, 600);
  }
};

const clearChatBox = () => {
  chatBox.innerHTML = ""; // Clear all chat messages
  chatBox.appendChild(
    createChatLi("Hi there !<br> How can i help you today ?", "incoming")
  ); // Add default prompt
};

// Event listener for refresh button
refreshChatBtn.addEventListener("click", clearChatBox);

const getBotResponse = (input) => {
  const normalizedInput = input.replace(/[?]/g, "").trim().toLowerCase();

  // Use regex for greetings
  if (/^(hello|hi|hey)/.test(normalizedInput)) {
    return "Hello, how may I help you?";
  }

  switch (normalizedInput) {
    case "how to book ticket":
    case "can you book me a movie":
    case "can you book a ticket":
      return "How to Book? <br> 1. Open the <span>Movie Pop'n</span> Website. <br> 2. Pick your favorite movie and click on it. <br> 3. Click 'Get Tickets'. <br> 4. Select your tickets and spot. <br> 5. Complete the transaction via online payment. <br> 6. Enjoy the show!";
    case "refund policy":
    case "how to get a refund":
    case "how refund works":
      return "Refund Policy: You may be eligible for a refund if the cinema cancels the movie or you have technical issues during booking. Contact our customer service.";
    case "how to make payment":
    case "payments":
    case "payment":
      return 'To make payments, select your movie and click "Get Tickets". You can use credit/debit cards or UPI.';
    case "what is your name":
      return "I am the pop'n bot.";
    case "what types of movies do you have":
      return 'Visit <a href="index.html">this page</a> for a list of movies.';
    case "what can you do":
      return "I help you clarify your doubts and will support you.";
    case "help":
      return 'For assistance, please visit <a href="contact.html">our contact page</a>.';
    default:
      return "I'm sorry, I don't understand what you're asking for.....<br> Could you please type it like these? <br> 'How to book ticket',<br> 'Refund policy' etc.. .";
  }
};

sendChatBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keydown", handleChat);
