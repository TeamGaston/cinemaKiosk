const choice = ( app ) => {
    app.get( "/choice", ( req, res ) => {
        res.render( "layout", { content: "movieChoice_movie", bottomBar: "bottomBarFrame" } );
    } );

    app.get( "/choice_time", ( req, res ) => {
        res.render( "layout", { content: "movieChoice_time", bottomBar: "bottomBarFrame" } );
    } );
}

export default choice;