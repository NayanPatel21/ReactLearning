import "./App.css";
import StateHookUpdater from "./common/Hook/StateHookUpdater";
import StateHookUpdaterArray from "./common/Hook/StateHookUpdaterArray";
import StateHookUpdaterArrayInObject from "./common/Hook/StateHookUpdaterArrayInObject";
import StateHookUpdaterObject from "./common/Hook/StateHookUpdaterObject";
import StateHookUpdaterToDoList from "./common/Hook/StateHookUpdaterToDoList";
// import ColorPicker from "./common/Hook/ColorPicker";
// import OnChangeHook from "./common/Hook/OnChangeHook";
// import StateHook from "./common/Hook/StateHook";
// import UseStateDemo from "./common/Hook/UseStateDemo";
// import ButtonEvent from "./common/Event/ButtonEvent";
// import ConditionalProps from "./common/props/ConditionalProps";
// import ListComponent from "./common/props/ListComponent";
// import ListCondition from "./common/props/ListCondition";
// import Student from "./common/props/student";
// import Button from "./common/Button";
// import ButtonModule from "./common/ButtonModule/ButtonModule";
// import Card from "./common/Card";
// import Food from "./common/food";
// import Footer from "./common/footer";
// import Header from "./common/header";

function App() {
  // const fruitList = {
  //   category: "Fruits",
  //   listItems: [
  //     { name: "Apple", calories: 52 },
  //     { name: "Pineapple", calories: 120 },
  //     { name: "Orange", calories: 47 },
  //     { name: "Banana", calories: 89 },
  //     { name: "mango", calories: 135 },
  //   ],
  // };

  // const vegetableList = {
  //   category: "Vegetables",
  //   listItems: [
  //     { name: "Carrot", calories: 41 },
  //     { name: "Broccoli", calories: 55 },
  //     { name: "Spinach", calories: 23 },
  //     { name: "Potato", calories: 77 },
  //     { name: "Tomato", calories: 18 },
  //   ],
  // };

  // const foodList = {
  //   category: "Food",
  //   listItems: [
  //     { name: "Bread", calories: 265 },
  //     { name: "Rice", calories: 130 },
  //     { name: "Chicken", calories: 239 },
  //     { name: "Cheese", calories: 402 },
  //     { name: "Egg", calories: 155 },
  //   ],
  // };
  return (
    <>
      {/* <Header></Header>
      <Food></Food>
      <Footer></Footer> 
          <Card></Card>  
        <Button></Button>
      <br></br>
      <br></br>
      <ButtonModule></ButtonModule>  
       <Student name="nayan" age={30} isStudent={false}></Student>
      <Student name="nayan1" age={32} isStudent={true}></Student>
      <Student name="nayan2" age={35} isStudent={false}></Student> 
       <ConditionalProps islogin={true} userName="Nayan"></ConditionalProps>
      <ConditionalProps islogin={true}></ConditionalProps>
       <ListCondition lst={fruitList}></ListCondition>
      <ListComponent lst={fruitList}></ListComponent>
      <ListComponent lst={foodList}></ListComponent>
      <ListComponent lst={vegetableList}></ListComponent>
      <ButtonEvent></ButtonEvent>
      <UseStateDemo></UseStateDemo>
      <StateHook></StateHook>
        <OnChangeHook></OnChangeHook>
         <ColorPicker></ColorPicker>
           <StateHookUpdater></StateHookUpdater>
           <StateHookUpdaterObject></StateHookUpdaterObject>
           <StateHookUpdaterArray></StateHookUpdaterArray>
            <StateHookUpdaterArrayInObject></StateHookUpdaterArrayInObject>
      */}

      <StateHookUpdaterToDoList></StateHookUpdaterToDoList>
    </>
  );
}

export default App;
