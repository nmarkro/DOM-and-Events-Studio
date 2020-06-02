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

    this.document.getElementById("landing").addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");

        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });
});