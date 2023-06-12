
function validate (activityData) {
    let errors = {}
    if(!activityData.name){
        errors.name = "Name required"
    } else if (!activityData.difficulty){
        errors.difficulty = "Difficulty required"
    } else if (activityData.difficulty > 5 || activityData.difficulty < 1){
        errors.difficulty = "difficulty must be from 1 to 5"
    } else if (!activityData.duration  ){
        errors.duration = "Duration required"
    } else if (activityData.duration > 72 || activityData.duration < 1) {
        errors.difficulty = "Duration must not be over 72hs"
    } else if (activityData.season.length === 0){
        errors.season = "Season required"
    } else if(activityData.country.length === 0){
        errors.country = "Select at least 1 country"
    }  
    return errors
}

export default validate;