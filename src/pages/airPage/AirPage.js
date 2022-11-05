import ProPage from "../proPage/ProPage";
import TitlePage from "../titlePage/TitlePage";



function AirPage () {
    const user = {
        name: "Anna",
        age: 19
    }
    return(
        <>
            <ProPage userInfo={user}/>
            <TitlePage userInfo={user}/>
        </>
    )
}
export default AirPage;