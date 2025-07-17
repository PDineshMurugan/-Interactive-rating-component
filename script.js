let selectedRating = null;

function toggle(id) {
    let arr = ["p1", "p2", "p3", "p4", "p5"];

    // Remove "clicked" from all
    arr.forEach(p => document.getElementById(p).classList.remove("clicked"));

    // Add "clicked" only to the selected one
    document.getElementById(id).classList.add("clicked");

    // Update selected rating
    selectedRating = arr.indexOf(id) + 1;
}

function saveRating() {
    if (selectedRating !== null) {
        localStorage.setItem('selectedRating', selectedRating);
    }
}

window.onload = function () {
    const storedRating = localStorage.getItem('selectedRating');
    if (storedRating) {
        document.getElementById("result").innerText = `Your rating: ${storedRating}`;
        let id = "p" + storedRating;
        document.getElementById(id).classList.add("clicked");
    }
}
