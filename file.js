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

/*
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
*/

/*
class HelloWorld extends React.Component{
    render(){
        return (
        <div>
            <p className = {this.props.config}>Ciao pianeta terra.</p>
            <p className="diversa">Come procede l'estate?</p>
        </div>
        )
    }
}
ReactDOM.render(<HelloWorld config = "Pippo" />, document.getElementById("root"));
*/
/*
class HelloWorld extends React.Component{
    render(){
        return (
        <div>
            <p className = {this.props.config.prima}>Ciao pianeta terra.</p>
            <p className = {this.props.config.seconda}>Come procede l'estate?</p>
        </div>
        )
    }
}

//ReactDOM.render(<HelloWorld config = {{prima:"ciao", seconda:"pippo"}} />, document.getElementById("root"));
*/
/*
class HelloWorld extends React.Component{
    render(){
        return (
        <div>
            <p className = {this.props.config.prima}>Ciao pianeta terra.</p>
            <p className = {this.props.config.seconda}>Come procede l'estate?</p>
            <p>Un attimo {this.props.carota}</p>
        </div>
        )
    }
}

ReactDOM.render(<HelloWorld config = {{prima:"ciao", seconda:"pippo"}} carota = {'genoveffa'}/>, document.getElementById("root"));
*/
const configurazione = {
    prima: 'ciao',
    seconda: 'pippo'
}
class HelloWorld extends React.Component{
    render(){
        return (
        <div>
            <p className = {this.props.config.prima}>Ciao pianeta terra.</p>
            <p className = {this.props.config.seconda}>Come procede l'estate?</p>
            <p>Un attimo {this.props.carota}</p>
        </div>
        )
    }
}

ReactDOM.render(<HelloWorld config = {configurazione} carota = {'genoveffa'}/>, document.getElementById("root"));