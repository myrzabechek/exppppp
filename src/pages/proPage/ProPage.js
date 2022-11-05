import classes from "./proPage.module.css"



function ProPage (props) {
    return(
        <>
            <ul>
                <li className={classes.title}>name: {props.userInfo.name}</li>
                <li className={classes.title}>age: {props.userInfo.age}</li>
            </ul>
        </>
    )
}
export default ProPage;