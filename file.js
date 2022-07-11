//var HelloWorld = () => <p><strong>Hello World</strong>!</p>;

/*
var HelloWorld = () => {
    var pianeta = "mondo";
    var domanda = "Come stai?"
    return (
        <div style={{color:"red"}}>
            <p>Ciao {pianeta}</p>
            <p>{domanda}</p>
        </div>
    )
}
*/

const testoRosso = {color:"red"}

var HelloWorld = () => {
    var pianeta = "mondo";
    var domanda = "Come stai?"
    let testoRosso = {color:"#f400a1"}
    return (
        <div style={testoRosso}>
            <p className="backGroundColorAcquamarine">Ciao {pianeta}</p>
            <p className="backgroundcolorPink">{domanda}</p>
        </div>
    )
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));