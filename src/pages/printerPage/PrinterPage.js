import classes from "./printerPage.module.css"




function PrinterPage () {
    const sayHello=()=>{
        alert("Hello World")
    }
    return(
        <>
            <button onClick={sayHello} className={classes.title}>Hello World</button>
        </>
    )
}
export default PrinterPage;