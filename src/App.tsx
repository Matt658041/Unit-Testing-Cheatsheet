/* import { SimplePost } from "./components/1Simple/SimplePost"; */
/* import UseArrayExample from "./components/2Hooks/UseArrayExample"; */
/* import { PostWithComment } from "./components/3UserInteraction/PostWithComments"; */
// import { ShoppingList1 } from "./components/4Errors/ShoppingList1";
/* import { ShoppingList2 } from "./components/4Errors/ShoppingList2"; */
/* import { Post } from "./components/5Doubles/2SimpleMocks/Post"; */
/* import { Post } from "./components/5Doubles/4Axios/Post"; */
import { AppWithRoutes } from "./components/6Router/AppWithRoutes";

function App() {


  return (
    <>
    {/*   <SimplePost
        user="Alex"
        content="Some content"
        likesBy={["Mary", "John"]}
      /> */}
      {/*       <UseArrayExample /> */}
    {/*   <PostWithComment user="Alex" content="Some content" /> */}
     {/*  <h2>Shopping list 1:</h2> */}
      {/* <ShoppingList1
        groceries={ingredients}
        selectItem={someFunction}
      /> */}
     {/*  <h2>Shopping list 2:</h2>
    /*   <ShoppingList2 groceries={ingredients} selectItem={someFunction} /> */}
     {/*  <Post content="Hello" id="123" user="Alex" /> */}
      <AppWithRoutes />
    </>
  );
}

export default App;
