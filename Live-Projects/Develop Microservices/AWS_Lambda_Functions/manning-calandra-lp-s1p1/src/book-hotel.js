
exports.handler = async (event) => {
    let validation_errors = getValidationErrors(event.body);

    if(validation_errors.length > 0) {
        return {
            statusCode: 418,
            body: JSON.stringify({"errors": validation_errors}) 
        };
    }

    if(!isTransientError()) {
        let b = JSON.parse(event.body);

        let hotel_name = getNearestHotelByMuseum(b.near)

        return {
            statusCode: 200,
            body: JSON.stringify(makeResponse(b.start_date, b.end_date, hotel_name))
        }
    }

    return {
        statusCode: 503,
        body: JSON.stringify({"errors": "transient error"}) 
    };
}

function getValidationErrors(body) {
    let errors = [];
    
    try {
        var b = JSON.parse(body || "{}");
    } catch (e) {
        errors.push("You have to provide a JSON object as input!");
        return errors;
    }
    
    if(!isKeyAValidDate("start_date", b)) errors.push("The property 'start_date' must be present and formatted as YYYY-MM-DD.");
    if(!isKeyAValidDate("end_date", b)) errors.push("The property 'end_date' must be present and formatted as YYYY-MM-DD.");
    if(!isKeyAValidMuseum("near", b)) errors.push("The property 'near' must be present and be one of the following: 'Joan Miro Foundation', 'Tate Gallery', 'Vatican Museums'.");

    return errors.sort();
}

function isKeyPresent(key, obj) {
    return key in obj;
}

function isKeyAValidDate(key, obj) {
    if(isKeyPresent(key, obj)) {
        let dateString = String(obj[key]);
        let regEx = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
        if(!dateString.match(regEx)) return false;  // Invalid format
        let d = new Date(dateString);
        let dNum = d.getTime();
        if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
        return d.toISOString().slice(0,10) === dateString;
    }

    return false;
}

function isKeyAValidMuseum(key, obj) {
    if(isKeyPresent(key, obj)) {
        let museums = ['joan miro foundation', 'tate gallery', 'vatican museums'];
        let museum = obj[key];
        return museums.includes(String(museum).toLowerCase());
    }

    return false;
}

function makeResponse(start_date, end_date, hotel_name) {
    let r = {}
    r.start_date = start_date;
    r.end_date = end_date;
    r.reservation_id = makeid(5);
    r.name = hotel_name;
    
    return r;
}

function isTransientError() {
    var d = new Date();
    var ms = d.getMilliseconds();
    return Boolean(ms%2);
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function getNearestHotelByMuseum(city) {
    let j = {};
    j["joan miro foundation"] = ["B1", "B2", "B3"];
    j["tate gallery"] = ["L1", "L2", "L3"];
    j["vatican museums"] = ["R1", "R2", "R3", "R4"];

    let lowered_city = String(city).toLowerCase();
    let hotels_number_per_city = j[lowered_city].length;
    let random_hotel = j[lowered_city][Math.floor(Math.random() * hotels_number_per_city)]

    return random_hotel;
}