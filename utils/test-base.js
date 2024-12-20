const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForOrder :    {
    username : "suyashguha04@gmail.com",
    password : "Strong@1234",
    productName:"ADIDAS ORIGINAL"
    
    }

}

)




