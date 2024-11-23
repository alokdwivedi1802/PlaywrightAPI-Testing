import {expect, test} from"@playwright/test"

test("API Testing - POST Call 1",async({request})=>{
    const resp1 = await request.post("/booking",{
        data:{
            "firstname": "ash",
            "lastname": "dwivedi",
            "totalprice": 114,
            "depositpaid": true,
            "bookingdates": {"checkin": "2018-01-01","checkout": "2019-01-01"},
            "additionalneeds": "Breakfast"
        }
    })
const jsonResp1 = await resp1.json();
console.log(jsonResp1);
expect(resp1.status()).toBe(200);
expect(resp1.statusText()).toBe("OK");
expect(resp1.ok()).toBeTruthy();
expect(jsonResp1.booking).toMatchObject({
    firstname: 'ash',
    lastname: 'dwivedi',
    totalprice: 114,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  })
expect(jsonResp1.booking.additionalneeds).toEqual("Breakfast")
}) 


test("API Testing - POST Call 2",async({request})=>{
    const resp1 = await request.post("/booking",{
        data:{
            "firstname": "ash",
            "lastname": "dwivedi",
            "totalprice": 214,
            "depositpaid": true,
            "bookingdates": {"checkin": "2008-01-01","checkout": "2019-01-01"},
            "additionalneeds": "Lunch"
        }
    })
const jsonResp1 = await resp1.json();
console.log(jsonResp1);
expect(resp1.status()).toBe(200);
expect(resp1.statusText()).toBe("OK");
})