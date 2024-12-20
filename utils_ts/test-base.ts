
import { test as baseTest } from '@playwright/test';
interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
};
export const customTest = baseTest.extend<{ testDataForOrder: TestDataForOrder }>(
    {
        testDataForOrder: {
            username: "suyashguha04@gmail.com",
            password: "Strong@1234",
            productName: "ADIDAS ORIGINAL"

        }

    }

)




