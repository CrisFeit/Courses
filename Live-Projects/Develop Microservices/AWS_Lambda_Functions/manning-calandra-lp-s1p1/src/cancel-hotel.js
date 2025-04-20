exports.handler = async (event) => {
    let validation_errors = getValidationErrors(event.body);

    if(validation_errors.length > 0) {
        return {
            statusCode: 418,
            body: JSON.stringify({"errors": validation_errors}) 
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({"message": "The hotel reservation has been canceled."})
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

    if(!isKeyAValidReservationId("reservation_id", b)) errors.push("The property 'reservation_id' must be present and must contains five uppercase characters (e.g.: 'ABCDE').");

    return errors.sort();
}

function isKeyPresent(key, obj) {
    return key in obj;
}

function isKeyAValidReservationId(key, obj) {
    if(isKeyPresent(key, obj)) {
        let reservation_id = String(obj[key]);
        let regEx = /^[A-Z]{5}$/; // es: ABCD
        if(!reservation_id.match(regEx)) 
            return false; // invalid format
        
        return true; // OK
    }

    return false; // key is not present => error
}