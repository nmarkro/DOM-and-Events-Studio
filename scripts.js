this.window.addEventListener("load", function() {
    this.document.getElementById("takeoff").addEventListener("click", function(event) {
        let responce = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (responce) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue';

            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000
        }
    });

    let rocketInit = function() {
        document.getElementById("rocket").style.bottom = '0px';
        document.getElementById("rocket").style.right = (document.getElementById('shuttleBackground').offsetWidth / 2) - (document.getElementById('rocket').width / 2) + 'px';    
    };

    this.document.getElementById("landing").addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");

        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';
        document.getElementById("spaceShuttleHeight").innerHTML = 0;

        rocketInit();
    });

    this.document.getElementById("missionAbort").addEventListener("click", function(event) {
        let responce = window.confirm("Confirm that you want to abort the mission.");

        if (responce) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';
            document.getElementById("spaceShuttleHeight").innerHTML = 0;

            rocketInit();
        }
    });

    rocketInit();
    let translate = function(x, y) {
        let rocket = document.getElementById("rocket");

        rocket.style.bottom = parseInt(rocket.style.bottom, 10) + y + "px";
        rocket.style.right = parseInt(rocket.style.right, 10) + x + "px";

        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + (y * 1000)
    };

    document.getElementById("upButton").addEventListener("click", function() {
        translate(0, 10)
    });
    document.getElementById("downButton").addEventListener("click", function() {
        translate(0, -10)
    });
    document.getElementById("leftButton").addEventListener("click", function() {
        translate(10, 0)
    });
    document.getElementById("rightButton").addEventListener("click", function() {
        translate(-10, 0)
    });
});