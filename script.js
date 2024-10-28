$(document).ready(function () {
    const btn = $("#submitDay");

    const bellSchedule = {
        1: { start: '8:24 AM', end: '9:31 AM' },
        2: { start: '9:36 AM', end: '10:43 AM' },
        3: { start: '10:48 AM', end: '11:55 AM' },
        4: { start: '12:41 PM', end: '1:48 PM' },
        5: { start: '1:53 PM', end: '3:00 PM' }
      }


    btn.on('click', function () {
        const selectedDay = $("#dayInput").val().trim().toUpperCase();

        // Validate the day input
        if (!["A", "B", "C", "D", "E", "F", "G"].includes(selectedDay)) {
            alert("Please enter a valid day (A-G)");
            return;
        }
        
        $.ajax({
            url: `https://api.npoint.io/3483a859c779a0823165`,
            method: 'GET',
            success: function (data) {
                const schedule = data.schedule
                const daySchedule = schedule.filter(item => 
                    item.days.includes(selectedDay),
                    renderHtml(data)

                )
    
            },
            error: function () {
                alert("Theres a connection error");
            }
        });
    })

    function renderHtml(data){

    }


})