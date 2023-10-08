export const reArrangeObj= (originalObject)=> {
    const time = [];
  
    const daysOfWeek = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", ];
  
    daysOfWeek.forEach((day) => {
        const dayState = originalObject[`${day}State`];
        time.push({ day, isActive:dayState.status, startTime: dayState.openTime, endTime: dayState.closeTime, });
    });
  
    return time;
  }
  

