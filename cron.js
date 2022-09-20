const https = require('https');
const fs = require('fs');

// Check if folder "sw_data" exists, if not, create it
if(!fs.existsSync(__dirname + "/sw_data")){
    fs.mkdirSync(__dirname + "/sw_data");
}
// Check if file events_upcomming.json exists
if(!fs.existsSync(__dirname + "/sw_data/events_upcomming.json")){
    fs.writeFileSync(__dirname + "/sw_data/events_upcomming.json", "[]");
}
// Check if file events_past.json exists
if(!fs.existsSync(__dirname + "/sw_data/events_past.json")){
    fs.writeFileSync(__dirname + "/sw_data/events_past.json", "[]");
}

function syncEvents() {
    var oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);

    var urlParameters = `from=2022-08-01T20%3A30%3A00%2B02%3A00&pageIndex=0`;
    var events = getEventsFromStager(urlParameters, function (eventData) {
        
        eventData = formatEvents(eventData);

        eventData = stageEvents(eventData);

        eventData = sortEvents(eventData)

        fs.writeFileSync(__dirname + "/sw_data/events_upcomming.json", JSON.stringify(eventData));

        console.log(eventData.length + " events synced");
    });
}

function sortEvents(eventData){
    // Sort events on eventData[x].date.startDoors
    eventData = eventData.sort((a, b) => {
        var a = new Date(a.date.startDoors);
        var b = new Date(b.date.startDoors);
        a = a.getTime();
        b = b.getTime();
        return a - b
    });

    return eventData
}

function stageEvents(newData){

    var oldData = JSON.parse(fs.readFileSync(__dirname + "/sw_data/events_upcomming.json", "utf-8"));

    for(var x = 0; x < newData.length; x++){
        // Check if event already exists
        var eventExists = false;
        var indexOfOld = 0;
        for(var y = 0; y < oldData.length; y++){
            if(newData[x].id == oldData[y].id){
                eventExists = true;
                indexOfOld = y;
            }
        }
        if(!eventExists){
            // Add event to oldData
            oldData.push(newData[x]);
        }else{
            // See if event is modified, in event.other.lastModification
            if(newData[x].other.lastModification != oldData[indexOfOld].other.lastModification){
                // Update event
                oldData[indexOfOld] = newData[x];
            }

        }
    }

    return oldData;
}

function formatEvents(events){
    var formatEvents = [];
    events.forEach(event => {
        var tempTickets = [];

        var internalEvent = false; //Set false as default

        var highestPrice = 0;

        event.tickets.forEach(ticket => {
            // If any ticket is found, set internalEvent to true
            internalEvent = true;
            if (ticket.price + ticket.webFee > highestPrice){
                highestPrice = ticket.price + ticket.webFee;
            }
            tempTickets.push({
                "id": ticket.id,
                "name": ticket.name,
                "price": ticket.price + ticket.webFee
            })
        });

        formatEvents.push({
            "id": event.eventId,
            "publicity": {
                "title": event.name,
                "subtitle": event.publicity.subtitle,
                "description": event.publicity.text,
                "image": event.publicity.media.images[0].url
            },
            "venue": {
                "id": event.venue.id,
                "name": event.venue.name,
                "address": event.venue.street,
                "zipcode": event.venue.zipcode,
                "city": event.venue.city,
            },
            "tickets": tempTickets,
            "date": {
                "startDoors": event.doorsOpen,
                "startEvent": event.startDate,
                "endDoors": "00:00",
                "endEvent": event.end
            },
            "other": {
                "status": event.status,
                "type": event.type,
                "totalTicketsAvailable": event.totalTickets,
                "totalTicketsRemaining": event.totalTicketsRemaining,
                "soldOut": event.soldOut,
                "internalEvent": internalEvent,
                "lastModification": event.modifiedAt,
                "highestPrice": highestPrice
            }
        }) 
    });
    return formatEvents;
}







function getEventsFromStager(urlParameters, myCallback) {
    var options = {
        host: "feeds.stager.nl",
        path: "https://feeds.stager.nl/events?" + urlParameters,
        headers: {
            'authorization': "Bearer a3dcf2f2-a78b-4f34-b905-63152cebf0ed"
        }
    }

    callback = function (response) {

        var str = '';

        //another chunk of data has been received, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been received, so we just print it out here
        response.on('end', function () {
            var eventData = JSON.parse(str).events
            myCallback(eventData);
        });
    }

    https.request(options, callback).end();
}

syncEvents();