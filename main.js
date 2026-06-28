const activityData = [
  {
    id: "work",
    title: "Work",
    current: 0,
    previous: 0,
    color: "var(--orange-300)",
    icon: "./images/icon-work.svg",
    bgColor: "hsl(15, 100%, 70%)",
  },
  {
    id: "play",
    title: "Play",
    current: 0,
    previous: 0,
    color: "var(--blue-300)",
    icon: "./images/icon-play.svg",
    bgColor: "hsl(195, 74%, 62%)",
  },
  {
    id: "study",
    title: "Study",
    current: 0,
    previous: 0,
    color: "var(--pink-400)",
    icon: "./images/icon-study.svg",
    bgColor: "hsl(348, 100%, 68%)",
  },
  {
    id: "exercise",
    title: "Exercise",
    current: 0,
    previous: 0,
    color: "var(--green-400)",
    icon: "./images/icon-exercise.svg",
    bgColor: "hsl(145, 58%, 55%)",
  },
  {
    id: "social",
    title: "Social",
    current: 0,
    previous: 0,
    color: "var(--purple-700)",
    icon: "./images/icon-social.svg",
    bgColor: "hsl(264, 64%, 52%)",
  },
  {
    id: "self-care",
    title: "Self Care",
    current: 0,
    previous: 0,
    color: "var(--yellow-300)",
    icon: "./images/icon-self-care.svg",
    bgColor: "hsl(43, 84%, 65%)",
  },
];

function renderActivities(activities) {
  const container = document.getElementById("activityContainer");
  container.innerHTML = "";

  activities.forEach((activity) => {
    const card = document.createElement("div");
    card.className = "time-card";

    card.innerHTML = `
      <div class="card-header" style="background-color: ${activity.bgColor};">
        <img src="${activity.icon}" alt="${activity.title}" class="activity-icon">
      </div>
      <div class="card-body">
        <div class="card-title">
          <h2>${activity.title}</h2>
          <p class="more-btn">•••</p>
        </div>
        <div class="time-stats">
          <span class="current-time">${activity.current}hrs</span>
          <span class="previous-time">Last week - ${activity.previous}hrs</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

renderActivities(activityData);

const dataHours;
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dataHours = data;
    console.log(dataHours);
  })
  .catch((error) => {
    console.error("خطأ في التحميل:", error);
  });
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

daily.addEventListener("click", () => {
  daily.classList.add("active");
  setTimeout(() => {
    daily.classList.remove("active");
  }, 3000);
  dataHours.forEach((e) => {
    const matchData = activityData.find((item) => item.title === e.title);
    if (matchData) {
      const cards = document.querySelectorAll(".time-card");
      cards.forEach((card) => {
        const title = card.querySelector("h3").textContent;
        if (title === e.title) {
          const currentTime = card.querySelector(".current-time");
          if (currentTime) {
            currentTime.textContent = `${e.timeframes.daily.current}hrs`;
          }

          const previousTime = card.querySelector(".previous-time");
          if (previousTime) {
            previousTime.textContent = `${e.timeframes.daily.previous}hrs`;
          }
        }
      });
    }
  });
});
monthly.addEventListener("click", () => {
  monthly.classList.add("active");
  setTimeout(() => {
    monthly.classList.remove("active");
  }, 3000);
  dataHours.forEach((e) => {
    const matchData = activityData.find((item) => item.title === e.title);
    if (matchData) {
      const cards = document.querySelectorAll(".time-card");
      cards.forEach((card) => {
        const title = card.querySelector("h3").textContent;
        if (title === e.title) {
          const currentTime = card.querySelector(".current-time");
          if (currentTime) {
            currentTime.textContent = `${e.timeframes.monthly.current}hrs`;
          }

          const previousTime = card.querySelector(".previous-time");
          if (previousTime) {
            previousTime.textContent = `${e.timeframes.monthly.previous}hrs`;
          }
        }
      });
    }
  });
});
weekly.addEventListener("click", () => {
  weekly.classList.add("active");
  setTimeout(() => {
    weekly.classList.remove("active");
  }, 3000);
  dataHours.forEach((e) => {
    const matchData = activityData.find((item) => item.title === e.title);
    if (matchData) {
      const cards = document.querySelectorAll(".time-card");
      cards.forEach((card) => {
        const title = card.querySelector("h3").textContent;
        if (title === e.title) {
          const currentTime = card.querySelector(".current-time");
          if (currentTime) {
            currentTime.textContent = `${e.timeframes.weekly.current}hrs`;
          }

          const previousTime = card.querySelector(".previous-time");
          if (previousTime) {
            previousTime.textContent = `${e.timeframes.weekly.previous}hrs`;
          }
        }
      });
    }
  });
});
