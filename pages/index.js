import { Fragment } from "react";
import NavBar from '../component/NavBar/NavBar';
import Submission from "../component/Submission/Submission";
import Ribbon from "../component/Ribbon/Ribbon";
import Advantages from '../component/Advantages/Advantages';
import Plan from "../component/Plan/Plan";
import Countries from "../component/Countiez/Countries";
import Comments from "../component/Comments/Comments";

export default function Home() {
  return (
    <Fragment>
      <NavBar/>
      <Submission/>      
      <Ribbon/>
      <Advantages/>
      <Plan/>
      <Countries/>
      <Comments/>
    </Fragment>
  )
}
