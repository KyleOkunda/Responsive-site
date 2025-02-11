window.onload = function () {
  // Create an image slider for the webiste intro section
  const intro = document.getElementById("intro-image");
  var imagesArr = [
    "./pics/resort2.webp",
    "./pics/resort5.webp",
    "./pics/resort6.webp",
    "./pics/working.jpeg",
  ];
  intro.setAttribute("src", imagesArr[0]);
  var i = 0;
  setInterval(() => {
    if (i > imagesArr.length - 1) {
      i = 0;
    }
    intro.setAttribute("src", imagesArr[i]);
    i++;
  }, 5000);

  //Add functionality for the menu icon
  const menuIcon = document.getElementsByClassName("menu-icon")[0];
  const links = document.getElementsByClassName("links-sect")[0];
  const hrSection = document.getElementsByClassName("hr")[0];
  const linkHolder = document.createElement("div");
  linkHolder.setAttribute("class", "link-holder");
  menuIcon.addEventListener("click", () => {
    if (!menuIcon.classList.contains("showing")) {
      menuIcon.classList.add("showing");
      linkHolder.appendChild(links);
      hrSection.appendChild(linkHolder);
    } else if (menuIcon.classList.contains("showing")) {
      menuIcon.classList.remove("showing");
      hrSection.removeChild(linkHolder);
    }
  });

  //Add functionality for the value section
  const vision = document.getElementsByClassName("actual-vision")[0];
  const mission = document.getElementsByClassName("mission")[0];
  const values = document.getElementsByClassName("values")[0];
  const moreVision = document.getElementById("more-vision");
  const moreMission = document.getElementsByClassName("more-mission")[0];
  const moreValues = document.getElementsByClassName("more-values")[0];
  console.log(moreVision);
  moreVision.addEventListener("click", () => {
    if (moreVision.classList.contains("more")) {
      moreVision.textContent = "-";
      moreVision.classList.remove("more");
      moreVision.classList.add("less");
      vision.style.overflow = "none";
      vision.style.height = "auto";
    } else if (moreVision.classList.contains("less")) {
      moreVision.textContent = "+";
      moreVision.classList.remove("less");
      moreVision.classList.add("more");
      vision.style.overflow = "hidden";
      vision.style.height = "30px";
    }
  });

  moreMission.addEventListener("click", () => {
    if (moreMission.classList.contains("more")) {
      moreMission.textContent = "-";
      moreMission.classList.remove("more");
      moreMission.classList.add("less");
      mission.style.overflow = "none";
      mission.style.height = "auto";
    } else if (moreMission.classList.contains("less")) {
      moreMission.textContent = "+";
      moreMission.classList.remove("less");
      moreMission.classList.add("more");
      mission.style.overflow = "hidden";
      mission.style.height = "30px";
    }
  });

  moreValues.addEventListener("click", () => {
    if (moreValues.classList.contains("more")) {
      moreValues.textContent = "-";
      moreValues.classList.remove("more");
      moreValues.classList.add("less");
      values.style.overflow = "none";
      values.style.height = "auto";
    } else if (moreValues.classList.contains("less")) {
      moreValues.textContent = "+";
      moreValues.classList.remove("less");
      moreValues.classList.add("more");
      values.style.overflow = "hidden";
      values.style.height = "30px";
    }
  });
};
