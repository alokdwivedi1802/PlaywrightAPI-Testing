import {test,request,expect} from "@playwright/test";


let reqContext2
test.beforeAll("Before All the Test",async()=>{
        reqContext2 = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com"
    })
})



test("API Testing Get Practice 1",async({request})=>{
    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking",
        {headers:{Accept:"application/json"}});
    console.log(await resp1.json());
})

test("API Testing Get Practice 2",async()=>{
    const reqContext = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    });
    const resp1 = await reqContext.get("/booking");
    console.log(await resp1.json());
})

test("API Testing Get Practice 3_Defining URL on test level",async()=>{
    
    const resp2 = await reqContext2 .get("/booking");
    console.log(await resp2.json());
})

test("API Testing Get Practise 4 Globally defining the URL in configuration file",async({request})=>{
    const resp1 = await request.get("/booking");
    console.log(await resp1.json());
})

test("API Testing Get Practise 5 Globally defining the URL in configuration file and passing the header as well",async({request})=>{
    const resp1 = await request.get("/booking");
    console.log(await resp1.json());
 })

test("API Testing Get Practise 6_Passing the GET call with parameters",async({request})=>{
    const resp1 = await request.get("/booking/4546");
    console.log(await resp1.json());
})

test("API Testing Get Practise 7_Passing the GET call with Query parameters",async({request})=>{
    const resp1 = await request.get("/booking/",{
        params:{
            firstname:"John",
            lastname:"Smith"
        }
    });
    console.log(await resp1.json());
})

test("API Testing Get Practise 8_Assertion testing with GET call http",async({request})=>{
    const resp1 = await request.get("/booking/25");
    console.log(await resp1.json());
    expect(resp1.status()).toBe(200);
    expect(resp1.ok()).toBeTruthy();
    expect(await resp1.json()).toMatchObject({
             firstname: 'John',
             lastname: 'Smith',
             totalprice: 111,
             depositpaid: true,
             bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
             additionalneeds: 'Breakfast'
})
const jsonresp = await resp1.json()
expect( jsonresp.firstname).toEqual("John")
})


test("API Testing Get Practise 9_API With UI Verificatio",async({request,page})=>{
const resp2 = await request.get("https://api.demoblaze.com/entries");
const jsonresp2 =await resp2.json();
console.log(jsonresp2.Items[0].title);
await page.goto("htps://www.demoblaze.com/");
page.getByRole('link',{name:'Samsung galaxys6' })
await  expect(page.getByRole('link',{name:'Samsung galaxys6' })).toHaveText(jsonresp2.Items[0].title)
})
