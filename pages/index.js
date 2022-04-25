import { Fragment } from "react";
import NavBar from '../component/NavBar/NavBar';
import Submission from "../component/Submission/Submission";
import Ribbon from "../component/Ribbon/Ribbon";
import Advantages from '../component/Advantages/Advantages';
import Plan from "../component/Plan/Plan";

export default function Home() {
  return (
    <Fragment>
      <NavBar/>
      <Submission/>      
      <Ribbon/>
      <Advantages/>
      <Plan/>
    </Fragment>
  )
}
