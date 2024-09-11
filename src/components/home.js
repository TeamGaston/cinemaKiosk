const home = ( app ) => {
    app.get( "/home", ( req, res ) => {
        res.render( "layout", { content: "main", bottomBar: "bottomBarFrame" } );
    } );
}

export default home;