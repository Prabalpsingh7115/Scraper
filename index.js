const axios = require('axios');
const cheerio = require('cheerio');

let scrape = async(url) => {
    let res = await axios.get(url)
    da = cheerio.load(res.data);
    console.log(da('.yhB1nd').find('span').html());
}

scrape('https://www.flipkart.com/kings-sr04xl-sr03xl-battery-omen-15-ce0xx-15-dc0xx-series-15-ce009la-15-ce015dx-15-dc0003la-15-dc0051nr-pavilion-15-cb0xx-15-cx0xx-15-cb041nr-15-cx0056wm-l08855-855-917678-1b1-917724-855-917678-2b1-4-cell-laptop/p/itm19759f4ef35c7?pid=ACCGA37D3HPVKP5S&lid=LSTACCGA37D3HPVKP5S82EJPR&marketplace=FLIPKART&q=battery+for+hp+omen+15&store=6bo%2Fai3%2Fw65&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=9c152f85-2d7a-492d-8d47-91be274efced.ACCGA37D3HPVKP5S.SEARCH&ppt=sp&ppn=sp&ssid=pur8343j7k0000001662193119084&qH=3a4747db9e720f9a')