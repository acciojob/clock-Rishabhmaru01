//your JS code here. If required.
        function updateTimer() {
            const timer = document.getElementById("timer");
            const now = new Date();

            // Format date & time 
            const formatted = now.toLocaleString(); 
            
            timer.textContent = formatted;
        }

        // Update immediately
        updateTimer();

        // Update every 1 second
        setInterval(updateTimer, 1000);