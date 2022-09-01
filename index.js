// const axios = require("axios");
// const cheerio = require("cheerio");

// const cheerioExample = async () => {
//     try {
//         const pageContent = await axios.get("https://slides.com/carboleda");
//         // console.log(pageContent.data);
//         const $ = cheerio.load(pageContent.data);
//         const presentations = $("li.deck.public")
//             .map((_, el) => {
//                 el = $(el);
//                 const title = el.find("span.deck-title-value").text();
//                 const description = el
//                     .find("span.deck-description-value")
//                     .text();
//                 const link = el.find("a.deck-link").attr("href");
//                 return { title, description, link };
//             })
//             .get();
//         console.log(presentations);
//     } catch (error) {
//         console.log(error);
//     }
// };

// cheerioExample();

const scrapeIt = require("scrape-it");

// const scrapeItExample = async () => {
//     try {
//         const { data } = await scrapeIt("https://slides.com/carboleda", {
//             presentations: {
//                 listItem: "li.deck.public",
//                 data: {
//                     title: "span.deck-title-value",
//                 },
//             },
//         });

//         console.log(data.presentations);
//     } catch (error) {
//         console.log(error);
//     }
// };

// scrapeItExample();

const scrapeItExample = async () => {
    try {
        const { data } = await scrapeIt("https://slides.com/carboleda", {
            title: "a.username",
        });

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

scrapeItExample();
