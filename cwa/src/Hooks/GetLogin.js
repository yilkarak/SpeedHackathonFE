import drivingData from '../data/driving_data.json';

export const GetLogin = (customerId) =>{
   let data = {login:false};

   drivingData.forEach((item) => {
        if (item['Customer ID'] == customerId){
            data.login = true;
        }
    });

    return data;
}