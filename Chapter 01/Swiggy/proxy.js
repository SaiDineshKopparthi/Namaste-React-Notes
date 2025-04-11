const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const SWIGGY_HOME_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

app.get("/api/swiggy/restaurant", async (req, res) => {
  try {
    const response = await axios.get(SWIGGY_HOME_API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        Referer: "https://www.swiggy.com/",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error while fetching the data from swiggy: ", error);
    res.status(500).json({ error: "Trouble fetching the restaurants data." });
  }
});

app.get("/api/swiggy/restaurant/:resId", async (req, res) => {
  try {
    const { resId } = req.params;
    const SWIGGY_RESTAURANT_MENU_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

    const response = await axios.get(SWIGGY_RESTAURANT_MENU_API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        Referer: "https://www.swiggy.com/",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error while fetching the data from swiggy: ", error);
    res.status(500).json({ error: "Trouble fetching the restaurant menu." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
