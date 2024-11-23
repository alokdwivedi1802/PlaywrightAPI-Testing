import {expect, test} from"@playwright/test"

test("API Testing - POST Call 1",async({request})=>{
    const resp1 = await request.patch("/booking/4546",{
        data:{
            "firstname": "Don",
            "lastname": "DD",
        }
    })
})
