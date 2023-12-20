const fetch = require('node-fetch');
const { cookie, postId, time } = require("./config.js")

async function main() {
    postId.forEach(async ID => {
        const newData = await fetch('https://www.itempazar.com/api/moveUpPost', { headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", cookie: cookie, }, body: `Id=${ID}`, method: "POST" }).then(res => res.json()).catch(err => {
            console.log('>> Error: An error occured while fetching data from the API. Please try again later.');
        });
        if (newData.success) {
            console.log(`İlan ID: ${ID} ${newData.message.replace(/<\/?b>/g, ' ').replace(/<br>/g, ' ')}`);
        } else if (newData.success == false) {
            console.log(`İlan ID: ${ID} ${newData.message.replace(/<\/?b>/g, ' ').replace(/<br>/g, ' ')}`);
        }
    });
}

main()
setInterval(() => { main() }, 60 * 60 * 1000 * time)