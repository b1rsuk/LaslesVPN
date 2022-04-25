import { Fragment } from "react";
import NavBar from '../component/NavBar/NavBar';
import Submission from "../component/Submission/Submission";
import Ribbon from "../component/Ribbon/Ribbon";

export default function Home() {
  return (
    <Fragment>
      <NavBar/>
      <Submission/>      
      <Ribbon/>
    </Fragment>
  )
}
