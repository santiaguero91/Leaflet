
function validate (activityData) {
    let errors = {}
    if(!activityData.name){
        errors.name = "Name required"
    } else if (!activityData.latitude){
        errors.latitude = "latitude required"
    } else if (!activityData.longitude){
        errors.longitude = "longitude required"
    } else if (!activityData.img){
        errors.season = "img required"
    }   
    return errors
}

export default validate;