import {Route, } from "react-router-dom";
import {HomePage} from "../pages/Home/home.page.jsx";
import { AboutMe } from './../pages/AboutMe/aboutme.page';
import {Switch} from "@radix-ui/themes";


export default function Routes(){
    return <Switch>
        <Route exact path={"/"}>
            <HomePage/>
        </Route>
        <Route path={"/about-me"}>
            <AboutMe/>
        </Route>
    </Switch>
}