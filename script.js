function toggle(id) {
    let arr=["p1","p2","p3","p4","p5"];
    for(let i=0;i<arr.length;i++)
    if(id==arr[i]){
        var rating =i+1;
        document.getElementById(arr[i]).classList.toggle("clicked");
        }
    selectedRating = rating;
    console.log("Rating selected: " + rating);

  }

function saveRating() {
    if (selectedRating !== null) {
      localStorage.setItem('selectedRating', selectedRating);
    }
}
window.onload = function() {
    const storedRating = localStorage.getItem('selectedRating');
    if (storedRating) {
      document.getElementById("result").innerHTML = storedRating;
    }
}
