setInterval(function(){

    let time = new Date;
    document.getElementById("Date").innerHTML = time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
    document.getElementById("Time").innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    
}, 1000);
