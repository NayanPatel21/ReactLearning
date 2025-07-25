import "./App.css";
import Student from "./common/props/student";
// import Button from "./common/Button";
// import ButtonModule from "./common/ButtonModule/ButtonModule";
// import Card from "./common/Card";
// import Food from "./common/food";
// import Footer from "./common/footer";
// import Header from "./common/header";

function App() {
  return (
    <>
      {/* <Header></Header>
      <Food></Food>
      <Footer></Footer> 
          <Card></Card>  
        <Button></Button>
      <br></br>
      <br></br>
      <ButtonModule></ButtonModule> */}
      <Student name="nayan" age={30} isStudent={false}></Student>
      <Student name="nayan1" age={32} isStudent={true}></Student>
      <Student name="nayan2" age={35} isStudent={false}></Student>
    </>
  );
}

export default App;
