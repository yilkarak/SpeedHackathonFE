import jsonData from '../data/safetyconcerns.json';

export const GetPoints = (customerId) => {
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
        total_seatbelt_usage += item['Seatbelt usage'];
        total_speeding_incidents += item['Speeding incidents'];
        total_hard_braking += item['Frequency of hard braking'];
        total_hard_acceleration += item['Frequency of hard acceleration'];
        total_sudden_lane_changes += item['Frequency of sudden lane changes'];

        if (item['Customer ID'] == customerId){
            driver_seatbelt_usage = item['Seatbelt usage'];
            driver_speeding_incidents = item['Speeding incidents'];
            driver_hard_braking = item['Frequency of hard braking'];
            driver_hard_acceleration = item['Frequency of hard acceleration'];
            driver_sudden_lane_changes = item['Frequency of sudden lane changes'];
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

    const driver_points = 
        (average_seatbelt_usage - driver_seatbelt_usage) +
        (average_speeding_incidents - driver_speeding_incidents) * 3 +
        (average_hard_braking - driver_hard_braking) * 3 +
        (average_hard_acceleration - driver_hard_acceleration) * 2 +
        (average_sudden_lane_changes - driver_sudden_lane_changes) * 2;

    if (driver_points > 0) {
        if (driver_points >= 50) {
            data.points = 350 + Math.min(Math.floor((driver_points - 50) / 2), 350);
        } else {
            data.points = Math.floor(driver_points / 2);
        }
    }

    return data;
}
