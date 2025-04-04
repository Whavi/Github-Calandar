document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.getElementById("calendar-body");
    const calendarYear = document.getElementById("current-date");
    let currentYear = new Date().getFullYear();

    const updateCalendar = () => {
        // Clear previous content
        calendarBody.innerHTML = '';

        // Add weeks for each month
        for (let week = 0; week < 52; week++) {
            for (let day = 0; day < 7; day++) {
                const calendarDay = document.createElement("div");
                calendarDay.classList.add("calendar-day");
                const activityLevel = Math.floor(Math.random() * 10); // Random activity level for demo

                if (activityLevel === 0) {
                    calendarDay.style.backgroundColor = '#f1f8ff';
                } else if (activityLevel > 0 && activityLevel <= 3) {
                    calendarDay.style.backgroundColor = '#c6e48b';
                } else if (activityLevel > 3 && activityLevel <= 5) {
                    calendarDay.style.backgroundColor = '#7bc96f';
                } else if (activityLevel > 5 && activityLevel <= 7) {
                    calendarDay.style.backgroundColor = '#239a3b';
                } else if (activityLevel > 7) {
                    calendarDay.style.backgroundColor = '#196127';
                }

                const tooltip = document.createElement("div");
                tooltip.classList.add("tooltip");
                tooltip.innerText = `Activity Level: ${activityLevel}`;
                calendarDay.appendChild(tooltip);

                calendarBody.appendChild(calendarDay);
            }
        }
    };

    const updateCurrentYear = () => {
        calendarYear.innerText = currentYear;
    };

    // Event listeners for navigation buttons
    document.getElementById("prev-year").addEventListener("click", () => {
        currentYear--;
        updateCalendar();
        updateCurrentYear();
    });

    document.getElementById("next-year").addEventListener("click", () => {
        currentYear++;
        updateCalendar();
        updateCurrentYear();
    });

    // Initial setup
    updateCalendar();
    updateCurrentYear();
});
