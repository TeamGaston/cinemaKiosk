import express from "express";
import mysql from "mysql";

const app = express();

app.use( express.static("public") );

app.set("view engine", "ejs");
app.set("views", "view");

// data = { content: "파일", popup: "popup/파일" ,downBar: "파일" }
app.get("/", (req, res) => {
    res.render( "layout", { content: "main", popup: "popup/earnPointPopup" ,downBar: "bottomBarFrame" } );
});

app.listen( 3000, () => {
    console.log("3000 Port is ready");
});