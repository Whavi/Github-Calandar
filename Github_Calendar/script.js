document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.getElementById("calendar-body");
    const calendarYear = document.getElementById("current-date");
    const daysOfWeekContainer = document.querySelector(".days-of-week-container");
    let currentYear = new Date().getFullYear();

    const updateCalendar = () => {
        // Clear previous content
        calendarBody.innerHTML = '';
        daysOfWeekContainer.innerHTML = ''; // Clear previous days of the week

        // Add days of the week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            const headerDay = document.createElement("div");
            headerDay.classList.add("calendar-day");
            headerDay.innerText = day;
            daysOfWeekContainer.appendChild(headerDay);
        });

        // Add weeks for each month
        for (let day = 0; day < 7; day++) {
            for (let week = 0; week < 52; week++) {
                const calendarDay = document.createElement("div");
                calendarDay.classList.add("calendar-day");

                calendarBody.appendChild(calendarDay);
            }
        }
    };

    const updateCurrentYear = () => {
        calendarYear.innerText = currentYear;
    };

    const changeYear = () => {
        const newYear = prompt("Enter a new year:");
        if (newYear && !isNaN(newYear)) {
            currentYear = parseInt(newYear, 10);
            updateCalendar();
            updateCurrentYear();
        }
    };

    // Event listener for clicking on the year to manually change it
    calendarYear.addEventListener("click", changeYear);

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
