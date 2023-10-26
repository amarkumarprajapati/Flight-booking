const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 1000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(`mongodb://127.0.0.1:27017/Details`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.error("error while connecting", error);
  });

// get countery details

const countylist = new mongoose.Schema({
  country: String,
});

const getdatafrom = mongoose.model("people", countylist);

app.get(`/api/getdata`, async (req, res) => {
  try {
    const county = await getdatafrom.find();
    res.json(county);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Post search

const countylistnew = new mongoose.Schema({
  from: String,
  to: String,
  Departure: String,
});

const searchdata = mongoose.model("counrties", countylistnew);

app.post("/api/searchdata", async (req, res) => {
  const { from, to, Departure, Code } = req.body;
  console.log("Received search criteria:", { from, to, Departure });

  try {
    const items = await searchdata.find({});

    console.log("Found items:", items);

    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

// getdata

const datafrom = new mongoose.Schema({
  time: String,
  time2: String,
  from: String,
  to: String,
  total: String,
  direct: String,
  time: String,
  totalfair: String,
});

const showdata = mongoose.model("datas", datafrom);

app.get("/api/Time", async (req, res) => {
  try {
    const getdatafromback = await showdata.find();
    res.json(getdatafromback);
    const { from, to } = req.query;
    let query = {};
    if (from) {
      query.from = from;
    }

    if (to) {
      query.to = to;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POSTUSER DATA

const Newschema = new mongoose.Schema({
  email: String,
  phone: String,
  passenger: String,
  date: String,
  nation: String
});

const alldata = mongoose.model("userdata",Newschema)

app.post(`/api/userdata1`,async (req,res)=>{
  try{
    const {email,phone,passenger,date,nation} = req.body
    const nusernext = new alldata({email,phone,passenger,date,nation})
    await nusernext.save()
    res.status(202).json({message:"Data saved"})
  }catch(error){
    console.error("Error saving data", error);
    res.status(600).json({ message: "Error saving data" });
  }
})


app.listen(port, () => {
  console.log(`server is running ${port}`);
});
