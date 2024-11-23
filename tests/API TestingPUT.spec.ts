import {expect, test} from"@playwright/test"

test("API Testing-PUT CALL 1",async({request})=>{
    const respPut = request.put("/booking/62",{
        headers:{Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="},
        data:{
            "firstname": 'yash',
            "lastname": 'dwivedi',
            "totalprice": 114,
            "depositpaid": true,
            "bookingdates": { checkin: '2018-01-01', checkout: '2019-01-01' },
            "additionalneeds": 'Pan Cakes'
        }
    })
    const jsonresp=await (await respPut).json();
    console.log(jsonresp);
    expect((await respPut).status()).toBe(200);
    expect((await respPut).statusText()).toBe("OK");
    expect((await respPut).ok()).toBeTruthy();
    expect(jsonresp).toMatchObject({
            "firstname" : "yash",
            "lastname" : "dwivedi",
            "totalprice" : 114,
            "depositpaid" : true,
            "bookingdates" : {"checkin" : "2018-01-01","checkout" : "2019-01-01"},
            "additionalneeds" : "Pan Cakes"
    })
})