export const GetPoints = (customerId, jsonData) => {
    console.log(customerId)
    console.log(jsonData)
    let data = {
        good:[],
        bad: [],
        points: 0
    }

    let total_seatbelt_usage = 0;
    let driver_seatbelt_usage = 0;

    let total_speeding_incidents = 0;
    let driver_speeding_incidents = 0;

    let total_hard_braking = 0;
    let driver_hard_braking = 0;

    let total_hard_acceleration = 0;
    let driver_hard_acceleration = 0;

    let total_sudden_lane_changes = 0;
    let driver_sudden_lane_changes = 0;

    jsonData.forEach(item => {
        total_seatbelt_usage += item.seatbeltUsage;
        total_speeding_incidents += item.speedingIncidents;
        total_hard_braking += item. freqOfHardBraking;
        total_hard_acceleration += item.freqOfHardAcceleration;
        total_sudden_lane_changes += item.freqOfSuddenLaneChanges;

        if (item.customerId== customerId){
            driver_seatbelt_usage = item.seatbeltUsage;
            driver_speeding_incidents = item.speedingIncidents;
            driver_hard_braking = item.freqOfHardBraking;
            driver_hard_acceleration = item.freqOfHardAcceleration;
            driver_sudden_lane_changes = item.freqOfSuddenLaneChanges;
        }
    })

    const average_seatbelt_usage = total_seatbelt_usage / jsonData.length;
    const average_speeding_incidents = total_speeding_incidents / jsonData.length;
    const average_hard_braking = total_hard_braking / jsonData.length;
    const average_hard_acceleration = total_hard_acceleration / jsonData.length;
    const average_sudden_lane_changes = total_sudden_lane_changes / jsonData.length;

    if (driver_seatbelt_usage > average_seatbelt_usage) {
        data.good.push({
            title: "Frequency of Seatbel Usage",
            average: average_seatbelt_usage,
            driver: driver_seatbelt_usage
        });
    } else {
        data.bad.push({
            title: "Frequency of Seatbel Usage",
            average: average_seatbelt_usage,
            driver: driver_seatbelt_usage
        });
    }

    if (driver_speeding_incidents < average_speeding_incidents) {
        data.good.push({
            title: "Speeding incidents",
            average: average_speeding_incidents,
            driver: driver_speeding_incidents
        });
    } else {
        data.bad.push({
            title: "Speeding incidents",
            average: average_speeding_incidents,
            driver: driver_speeding_incidents
        });
    }

    if (driver_hard_braking < average_hard_braking) {
        data.good.push({
            title: "Frequency of hard braking",
            average: average_hard_braking,
            driver: driver_hard_braking
        });
    } else {
        data.bad.push({
            title: "Frequency of hard braking",
            average: average_hard_braking,
            driver: driver_hard_braking
        });
    }

    if (driver_hard_acceleration < average_hard_acceleration) {
        data.good.push({
            title: "Frequency of hard acceleration",
            average: average_hard_acceleration,
            driver: driver_hard_acceleration
        });
    } else {
        data.bad.push({
            title: "Frequency of hard acceleration",
            average: average_hard_acceleration,
            driver: driver_hard_acceleration
        });
    }

    if (driver_sudden_lane_changes < average_sudden_lane_changes) {
        data.good.push({
            title: "Frequency of sudden lane changes",
            average: average_sudden_lane_changes,
            driver: driver_sudden_lane_changes
        });
    } else {
        data.bad.push({
            title: "Frequency of sudden lane changes",
            average: average_sudden_lane_changes,
            driver: driver_sudden_lane_changes
        });
    }

    let driver_points = 0;

    if(average_seatbelt_usage < driver_seatbelt_usage){
        driver_points += 100;
    }

    if(driver_speeding_incidents < average_speeding_incidents){
        driver_points += 200;
    }

    if(driver_hard_braking < average_hard_braking){
        driver_points += 200;
    }


    if(driver_hard_acceleration < average_hard_acceleration){
        driver_points += 200;
    }


    if(driver_sudden_lane_changes < average_sudden_lane_changes){
        driver_points += 200;
    }
    
    data.points = driver_points;

    return data;
}
