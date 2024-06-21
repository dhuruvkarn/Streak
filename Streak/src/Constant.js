export const generateRandomData = (numPoints) =>{ 
    const data = []; 
    for (let i = 0; i < numPoints; i++) { 
    data.push({ 
    x: i, 
    y: Math.floor(Math.random() * 100) 
    }); 
    } 
    return data;
} 
    