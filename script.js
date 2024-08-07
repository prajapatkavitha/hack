document.getElementById('contact-form').
    
    addEventListener('submit', function(event)
    
    { event.preventDefault(); // Prevent default form submission behavior
    
    var name =
    
    document.getElementById('name').value;
    
    var email =
    
    document.getElementById('email').value;
    
    var message =
    
    document.getElementById('message').value;
    
    // Send data to server or perform other actions
    
    here
    
    alert('Message sent!');
    
    });
    
    // Add event listener to flights table rows
    
    document.querySelectorAll('#flights-table tbody tr').forEach(function(row) {
    
    row.addEventListener('click', function() {
    
    // Perform actions when a table row is clicked
    
    var flightNumber = this.cells[0].textContent;
    
    alert('You selected flight' + flightNumber);
    
    }); 
    
    });
    
    // Add dynamic data to flights table
    
    var flightsData = [
    
    {flightNumber: 'AA102', departure: '11:00 AM', arrival : ' 12:30 PM' },
    
    {flightNumber: 'AA103', departure: '1:00 PM',
    
    arrival: '2:30 PM' },
    
    // Add more flights data here
    ];
    
    flightsData.forEach(function(flight) { var row = document.createElement('tr');
    
    row.innerHTML =
    
    <td>${flight.flightNumber}</td>;
    
    <td>${flight.departure}</td>;
    
    <td>${flight.arrival}</td>;
    
    document.getElementById('flights-table').appendChild(row); 
});


    