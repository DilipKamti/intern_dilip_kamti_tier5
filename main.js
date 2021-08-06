var s=document.getElementById("main");
function App() {
    let curDate = new Date();
    var curtime = curDate.getHours();
    console.log(curtime);
    let greet = '';
    let color= '';
    if (curtime >= 1 && curtime < 12) {
        greet = 'Good Morning';
       color = 'Green';
        s.innerHTML = `<h1>Hello Devloper, <span style="color:${color}">${greet}</span></h1>`;
    } else if (curtime >= 12 && curtime < 16) {
        greet = 'Good Afternoon';
        color = 'Orange';
        s.innerHTML = `<h1>Hello Devloper, <span style="color:${color}">${greet}</span></h1>`;
    }
     else if (curtime >= 16 && curtime < 20) {
        greet = 'Good Evening';
        color = 'Cyan';
        s.innerHTML = `<h1>Hello Devloper, <span style="color:${color}">${greet}</span></h1>`;
    }
    else {
        greet = "Good Night";
        color = 'Black';
        s.innerHTML = `<h1>Hello Devloper, <span style="color:${color}">${greet}</span></h1>`;
    }
};
App();
