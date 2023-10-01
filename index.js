const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");

const connectDB=require("./Config/db")
const userRouter =require("./routes/user.routes.js");
// const propertyRouter =require( "./routes/property.routes.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));



app.use("/api/v1/users", userRouter);
// app.use("/api/v1/properties", propertyRouter);
app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});
const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, () =>
            console.log("Server started on port http://localhost:8080"),
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();