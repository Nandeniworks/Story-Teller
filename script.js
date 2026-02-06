
const storyContainer = document.querySelector(".story-container");


const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");


const resultParagraph = document.getElementById("result");


const storyObj = {
  scary: {
    story: "During a late night train journey, a group of friends noticed an extra name appearing on their ticket list after every stop.When the train reached the final station, only those names remained—and none of them belonged to the living.",
    
  },
  funny: {
    story: "A group of friends set out on a serious trek, determined to prove they were fearless adventurers.They turned back halfway not because of danger, but because they forgot snacks and started blaming each other.",
    
  },
  adventure: {
    story: "Armed with nothing but an old journal and stubborn courage, a young explorer crossed the forbidden sea in search of a vanished kingdom.When the ruins finally rose from the mist, she realized the real challenge wasn’t finding the lost world it was surviving what still ruled it.",
    
  }
};


function displayStory(genre) {
  if (storyObj[genre]) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}


scaryStoryBtn.addEventListener("click", () => {
  displayStory("scary");
});

funnyStoryBtn.addEventListener("click", () => {
  displayStory("funny");
});

adventureStoryBtn.addEventListener("click", () => {
  displayStory("adventure");
});
