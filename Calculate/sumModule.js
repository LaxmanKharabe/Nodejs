const sum = (numb) =>{
    console.log(numb);
    const params = new URLSearchParams(numb)
    let jsonData = Object.fromEntries(params);
    console.log(jsonData);
    const calculateSum = Number(jsonData.num1) + Number(jsonData.num2)
    return calculateSum;
}

module.exports.sum = sum;