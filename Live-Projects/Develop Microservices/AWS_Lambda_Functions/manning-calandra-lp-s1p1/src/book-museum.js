
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

        return {
            statusCode: 200,
            body: JSON.stringify(makeResponse(b.when, b.museum_name))
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
    
    if(!isKeyAValidDate("when", b)) errors.push("The property 'when' must be present and formatted as YYYY-MM-DD.");
    if(!isKeyAValidMuseum("museum_name", b)) errors.push("The property 'museum_name' must be present and be one of the following: 'Joan Miro Foundation', 'Tate Gallery', 'Vatican Museums'.");

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

function makeResponse(when, museum_name) {
    let r = {}
    r.when = when;
    r.reservation_id = makeid(5);
    r.name = museum_name;
    
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