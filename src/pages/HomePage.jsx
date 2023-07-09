import NavigationBar from "../components/NavigationBar";
import MyFooter from "../components/MyFooter";
import Welcome from "../components/Welcome";
import Main from "../components/Main";

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <Welcome />
            <Main />
            <MyFooter />
        </>
    )
}

export default HomePage