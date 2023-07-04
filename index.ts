import puppeteer from "puppeteer";
import express from "express";
const app = express();
app.use("/images", express.static(__dirname + "/images"));

const browser = puppeteer.launch({ headless: true,args: ['--no-sandbox'] });

const scrapeResult = async (seatNumber: string) => {
  const page = await (await browser).newPage();
  await page.goto("http://www.dev.nec.gov.ly/finalresults/");
  await page.setDefaultNavigationTimeout(60000); // 60 seconds
  await page.waitForSelector('input[name="ctl00$MainContent$TxtexamineeId"]');
  await page.type('input[name="ctl00$MainContent$TxtexamineeId"]', seatNumber);
  await page.click("#ctl00_MainContent_btnSearch");
  await page.waitForSelector("#ctl00_MainContent_GridStudents");
  await page.screenshot({
    path: `./images/${seatNumber}.png`,
    fullPage: true,
    omitBackground: true,
  });
  await page.close();
};

app.get("/result/:id", async (req, res) => {
  await scrapeResult(req.params.id);
  console.log(req.params.id);
  // res.sendFile(`${__dirname}/images/${req.params.id}.png`);
  res.json({
    version: "v2",
    content: {
      messages: [
        {
          type: "image",
          url: "https://eshtrely.live/" + `images/${req.params.id}.png`,
          buttons: [],
        },
      ],
      actions: [],
      quick_replies: [],
    },
  });
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000/result/213134");
});
