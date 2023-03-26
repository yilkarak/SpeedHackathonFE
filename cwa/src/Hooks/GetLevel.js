import { useEffect, useState } from "react";

const levels = [
    {
        title: "Level 1: Good Driver",
        threshold: 350,
        target: 700
    },
    {
        title: "Level 2: You're Great",
        threshold: 700,
        target: 1000
    },
    {
        title: "Level 3: Expert Driver",
        threshold: 1000,
        target: 9999999
    },
];

const userData = {
    points: 299
}

export default function GetLevel (){
    const [userProgressData, setUserProgressData] = useState(null);

    useEffect(() => {
        let highestLevelAchieved = {
            title: "Level 0: Beginner",
            threshold: 0,
            target: 350
        };
        
        levels.forEach(level => {
            if (userProgressData == null && userData.points >= level.threshold){
                highestLevelAchieved = level;
            }
        });

        setUserProgressData({
            title: highestLevelAchieved.title,
            threshold: highestLevelAchieved.threshold,
            target: highestLevelAchieved.target,
            points: userData.points
            }
        )
    }, []);

    return userProgressData;
} 