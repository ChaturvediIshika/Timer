setInterval(showTime, 1000);
function showTime() {
    var date=new Date();
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":"
            + min + ":" + sec + am_pm;
 
    document.getElementById("clock")
            .innerHTML = currentTime;

    if(hour>=4 && hour<=11 && am_pm=="AM")
    {
        document.getElementById('myImageID').src="./images.jpg";
        document.getElementById("message").innerText="Good Morning";
    }
    else if(hour==12 || hour<4 && am_pm=="PM")
    {
        document.getElementById('myImageID').src="./bicycle-2098733__340.jpg";
        document.getElementById("message").innerText="Good Afternoon";
    }
    else if(hour>=4 && hour<8 && am_pm=="PM")
    {
        document.getElementById('myImageID').src="./wp3113726.webp";
        document.getElementById("message").innerText="Good Evening";
    }
    else if(hour>=8 || hour<4)
    {
        document.getElementById('myImageID').src="./starry-nigth-stars-night-sky-wallpaper-preview.jpg";
        document.getElementById("message").innerText="Good Night";
    }
    document.getElementById("date").innerText=date.toDateString();
}
showTime();