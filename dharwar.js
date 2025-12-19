/* ================= MOBILE NAV ================= */
const toggle = document.getElementById("mobile-toggle");
const navList = document.querySelector(".nav-list");

if (toggle && navList) {
    toggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
}

/* ================= MULTI-VIEW SLIDERS ================= */
document.querySelectorAll(".slider").forEach(slider => {
    const slides = slider.querySelector(".slides");
    const slide = slides.children[0];
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    let index = 0;

    const getSlideWidth = () =>
        slide.getBoundingClientRect().width + 24; // gap included

    nextBtn.addEventListener("click", () => {
        const maxIndex = slides.children.length - 1;
        index = Math.min(index + 1, maxIndex);
        slides.style.transform = `translateX(-${index * getSlideWidth()}px)`;
    });

    prevBtn.addEventListener("click", () => {
        index = Math.max(index - 1, 0);
        slides.style.transform = `translateX(-${index * getSlideWidth()}px)`;
    });
});

/* ================= CALENDAR ================= */
const monthYear = document.getElementById("monthYear");
const calendarDates = document.getElementById("calendarDates");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar() {
    calendarDates.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendarDates.appendChild(document.createElement("div"));
    }

    for (let d = 1; d <= totalDays; d++) {
        const el = document.createElement("div");
        el.textContent = d;
        calendarDates.appendChild(el);
    }
}

prevMonth.onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
};

nextMonth.onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
};

renderCalendar();
