// import React from 'react';
// const rootElement=document.getElementById('root');
/*global ReactDOM*/
/*global React*/
// window.id = 0;
// class Todo extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             items:[],
//             text:""
//         }
        
//     }
    // handleTextChange = (e) => {
   
    //     this.setState({
    //         text:e.target.value
            
    //     });
        

    // }
    
//     handleAddItem = (event) => {
    
//         this.setState({
//             text:event.target.value
//         });
        
//     event.preventDefault();
    
//     let newItem = {
//       id: window.id++,
//       text: this.state.text,
//       done: false
//     };
    
//     this.setState((prevState) => ({
//       items: prevState.items.concat(newItem),
//       text: ""
//     }));
//   }
  
  
 
  
    
    
    
//     render() {
//         return (
//             <div id="mainId">
//       <p class="todos-properties">todos</p>
//       <div id="writtingPad">
//         <input onChange={this.handleAddItem} type="text" placeholder="Add Your todo.." id="userInput"  value={this.state.text}/>
//      <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem}/>
//       </div>
     
//     </div>
//              );
        
//     }
    
// }
// class TodoItem extends React.Component {

//     markCompleted = (event) => {
//         this.props.onItemCompleted(this.props.id);
//     }
//     deleteItem = (event) => {
//         this.props.onDeleteItem(this.props.id)
//     }
//     render() {
//          var itemClass = "form-check todoitem" + (this.props.completed ? "done" : "undone");
//     return (
//       <li className={itemClass} ref={li => this._listItem = li }>
//         <label className="form-check-label">
//           <input type="checkbox" className="form-check-input" onChange={this.markCompleted} /> 
//           <input type="text" className="user-todo">{this.props.text}</input>
//         </label>
//         <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
//       </li>
//     );

        
//     }
    
// }


// class TodoList extends React.Component{
//     render() {
//         return (
//             <ul className="todolist">
//             {this.props.items.map(item=>(
//             <TodoItem key={item.id} id={item.id} text={item.text}
//     completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
// ))}
//             </ul>
            
//             )
        
//     }
// }


// let todoItems = [];

// class TodoList extends React.Component {
//   render () {
//     var items = this.props.items.map((item, index) => {
//       return (
//         <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
//       );
//     });
//     return (
//       <ul className="list-group"> {items} </ul>
//     );
//   }
// }
  



// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onClickClose = this.onClickClose.bind(this);
//     this.onClickDone = this.onClickDone.bind(this);
//   }
//   onClickClose() {
//     var index = parseInt(this.props.index);
//     this.props.removeItem(index);
//   }
//   onClickDone() {
//     var index = parseInt(this.props.index);
//     this.props.markTodoDone(index);
//   }
//   render () {
//     var todoClass = this.props.item.done ? 
//         "done" : "undone";
//     return(
//       <li className="list-group-item ">
//         <div className={todoClass}>
//           <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
//           {this.props.item.value}
//           <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
//         </div>
//       </li>     
//     );
//   }
// }

// class TodoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
// componentDidMount() {
//     this.refs.itemName.focus();
//   }
//   onSubmit(event) {
//     event.preventDefault();
//     var newItemValue = this.refs.itemName.value;
    
//     if(newItemValue) {
//       this.props.addItem({newItemValue});
//       this.refs.form.reset();
//     }
//   }
//   render () {
//     return (
//       <form ref="form" onSubmit={this.onSubmit} className="form-inline">
//         <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
//         <button type="submit" className="btn btn-default">Add</button> 
//       </form>
//     );   
//   }
// }
//  class TodoHeader extends React.Component {
//   render () {
//     return <h1>Todo list</h1>;
//   }
// }
  



  
// class TodoApp extends React.Component {
//   constructor (props) {
//     super(props);
//     this.addItem = this.addItem.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//     this.markTodoDone = this.markTodoDone.bind(this);
//     this.state = {todoItems: todoItems};
//   }
//   addItem(todoItem) {
//     todoItems.unshift({
//       index: todoItems.length+1, 
//       value: todoItem.newItemValue, 
//       done: false
//     });
//     this.setState({todoItems: todoItems});
//   }
//   removeItem (itemIndex) {
//     todoItems.splice(itemIndex, 1);
//     this.setState({todoItems: todoItems});
//   }
//   markTodoDone(itemIndex) {
//     var todo = todoItems[itemIndex];
//     todoItems.splice(itemIndex, 1);
//     todo.done = !todo.done;
//     todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
//     this.setState({todoItems: todoItems});  
//   }
//   render() {
//     return (
//       <div id="main">
//         <TodoHeader />
//         <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
//         <TodoForm addItem={this.addItem} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('app'));
// window.id = 0;
// class TodoApp extends React.Component {
//      constructor(props){
//          super(props);
//          this.state = {
//              id:[],
//              userContent:[]
//          }
//      }
     
     
//      handleKey = (event) => {
//          if(event.keyCode === 13){
//             let duplicate = {task:event.target.value};
//             let duplicateArray = this.state.userContent;
//             let duplicateId = window.id++;
//             let duplicateArrayId = this.state.id; 
//             duplicateArrayId.push(duplicateId);
//             duplicateArray.push(duplicate );

//              this.setState({
//                  userContent:duplicateArray,
//                  id:duplicateArrayId
//              });
            // document.getElementById('userInput').value = "";
        //  console.log(this.state.userContent);
        //  console.log(this.state.id);
// }
// }
//      markItemCompleted = (itemId) => {
//     let updatedItems = this.state.items.map(item => {
//       if (itemId === item.id)
//         item.done = !item.done;
      
//       return item;
//     });
//     this.setState({
//       items: [].concat(updatedItems)
//     });
//   }
//   handleDeleteItem = (itemId) => {
//       let updatedItems = this.state.items.filter(item => {
//           return item.id !==  itemId;
//       });
//       this.setState({
//           items: [].concat(updatedItems)
//       });
      
//   }
    //  displayTodo= () => {
        
    //         const valuesoftodos = this.state.id.map((item)=> { 
            //   let content= this.state.userContent[item].task;
            //   console.log(content);
    //         return <TodoList key={item} id={item}  text={this.state.userContent[item].task}/>
    //         });
    //         return valuesoftodos;
    //  }
            
             
     
     
     
     
     
    // render() {
        // console.log("hiii");
//         return (
// <div>    
//         <div id="mainId">
//       <p className="todos-properties">todos</p>
//       <div id="writtingPad">
//         <input type="text" placeholder="Add Your todo.." id="userInput" onKeyDown={this.handleKey}/>
     
//       </div>

      
//      </div>
//      {this.displayTodo()}
//     </div>
//             );
//     }
// }

// class TodoList extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return (
// <div className = "overallToDoListDivClass">
//         <input type="checkbox"/>
//         <div>{this.props.text}</div>
//         <span className = "">X</span>
//         </div>
//             )}
    
// }
            
// function App() {
//   const [fields, setFields] = useState([{ value: null }]);

//   function handleChange(i, event) {
//     const values = [...fields];
//     values[i].value = event.target.value;
//     setFields(values);
//   }

//   function handleAdd() {
//     const values = [...fields];
//     values.push({ value: null });
//     setFields(values);
//   }

//   function handleRemove(i) {
//     const values = [...fields];
//     values.splice(i, 1);
//     setFields(values);
//   }

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>

//       <button type="button" onClick={() => handleAdd()}>
//         +
//       </button>

//       {fields.map((field, idx) => {
//         return (
//           <div key={`${field}-${idx}`}>
//             <input
//               type="text"
//               placeholder="Enter text"
//               onChange={e => handleChange(idx, e)}
//             />
//             <button type="button" onClick={() => handleRemove(idx)}>
//               X
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// class MainClass extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       list:[],
//       content:[]
//     }
//   }
//   handleKey = (event) =>{
  
//     if(event.keyCode === 13)
//     {
//       let v = event.target.value;
//       this.setState({
//         content:[...v]
//       })
//     }
//     console.log(this.state.content)
    
//   }
//   render(){
//     return(
//       <div>
//       <input type="text" onKeyDown={this.handleKey}/>
//       </div>
      
      
//       )
    
    
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { values: [] };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   createUI(){
//     return this.state.values.map((el, i) => 
//         <div key={i}>
//     	    <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
//     	    <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
//         </div>          
//     )
//   }

//   handleChange(i, event) {
//     let values = [...this.state.values];
//     values[i] = event.target.value;
//     this.setState({ values });
//   }
  
//   addClick(){
//     this.setState(prevState => ({ values: [...prevState.values, '']}))
//   }
  
//   removeClick(i){
//     let values = [...this.state.values];
//     values.splice(i,1);
//     this.setState({ values });
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.values.join(', '));
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//           {this.createUI()}        
//           <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
//           <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }


// window.id=0;
// let noOfItemsLeft = 0;
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       values:[],
//       todo:'',
//       count:0,
//       selectedFilter:"All"
//     }
//   }
//   handleChange = (event) => {
//     this.setState({todo:event.target.value});
    
//   }
//   onHandleKeyDown = (event) => {
//     if(event.keyCode !== 13)
//     return;
//     event.preventDefault();
//     let val = this.state.todo.trim();
//     if(val){
//       this.addTodo(val);
//       this.setState({todo:""})
//     }
//   }
  
  
//   addTodo(title) {
//     this.setState({
//       count:noOfItemsLeft + 1
//     })
//     noOfItemsLeft += 1;
//     this.setState({
//       values:this.state.values.concat({
//         id:window.id++,
//         title:title,
//         completed:false,
//         count: noOfItemsLeft + 1
//       })
//     })
    
//     console.log(this.state.values);
//   }
// removeTodo = (e,item) => {
  
//   if(item["completed"] === true)
//         {
//       let updatedList = this.state.values;
//         let index = updatedList.indexOf(item.id);
//         updatedList.splice(index, 1);
//         this.setState({ values: updatedList });
//         }
//   else {
    
//       let updatedList = this.state.values;
//         let index = updatedList.indexOf(item.id);
//         updatedList.splice(index, 1);
//         this.setState({
//           count:noOfItemsLeft - 1

          
//         })
//         noOfItemsLeft -= 1;
//         this.setState({ values: updatedList });
//   }      
  
  
// }

// markItemCompleted = (e,item)=>{
  
//   item["completed"] = true;
//   item["count"] = noOfItemsLeft - 1
//   console.log(item);
//   console.log(this.state.values); 
//   noOfItemsLeft -= 1;
// }
// updatedList = (selectedFilter) => {
  
//   this.setState({
//     selectedFilter:selectedFilter
//   });
  
// }

// renderList = (option) => {
//     if(option === "All"){
//       return <ul>
//         {this.state.values.map((items,i)=>
//         <li key={i} id={items.id} count={this.state.count}>
//         <input type="checkbox" onClick={(e)=>this.markItemCompleted(e,items)}/>
//         <input value={items.title} type="text"/>
//         <input type="button" value="X" onClick={(e)=>this.removeTodo(e,items)} />
//         </li>
// )}

// </ul>
      
//     }
  
//   else if(option === "Active"){
//   return <ul>
//         {this.state.values.map((items,i)=> items.completed === true ?
//         <li key={i} id={items.id} count={this.state.count}>
//         <input type="checkbox" onClick={(e)=>this.markItemCompleted(e,items)}/>
//         <input value={items.title} type="text"/>
//         <input type="button" value="X" onClick={(e)=>this.removeTodo(e,items)} />
//         </li> : undefined
// )}
// </ul>
   
//   }
//   else if(option === "Completed"){
//       return <ul>
//         {this.state.values.map((items,i)=> items.completed !== true ?
//         <li key={i} id={items.id} count={this.state.count}>
//         <input type="checkbox" onClick={(e)=>this.markItemCompleted(e,items)}/>
//         <input value={items.title} type="text"/>
//         <input type="button" value="X" onClick={(e)=>this.removeTodo(e,items)} />
//         </li> : undefined
// )}
// </ul>
   
//   }
  
//   }



//     render() {
//       return (

//         <div>
//         <input 
//         type="text"
//         value = {this.state.todo}
//         onChange = {this.handleChange}
//         onKeyDown = {this.onHandleKeyDown}>
//         </input>
//         <ul>
//         {this.state.values.map((items,i)=>
//         <li key={i} id={items.id} count={this.state.count}>
//         <input type="checkbox" onClick={(e)=>this.markItemCompleted(e,items)}/>
//         <input value={items.title} type="text"/>
//         <input type="button" value="X" onClick={(e)=>this.removeTodo(e,items)} />
//         </li>
// )}
//           {this.renderList(this.state.selectedFilter)}
//                 </ul>
//                 <Footer count={this.state.count} selectedFilter = {this.updatedList}/>
//         </div>
//         )
    
//   }
  
// }
// class Footer extends React.Component {
//   constructor(props){
//     super(props);
//   }
  
//   render(){
//     return (
      
//           <div>
//                 <strong className="todo-count" >{this.props.count} left Items</strong>
//                 <div>
//                 <button type="button" onClick={() => this.props.selectedFilter("All")}>All</button>
//                 <button type="button" onClick={() => this.props.selectedFilter("Active")}>Active</button>
//                 <button type="button" onClick={() => this.props.selectedFilter("Completed")}>Completed</button>
//                 <button>Clear-Completed</button>
// </div>
//                 </div>
            
      
      
//       )
//   }
// }





import React from 'react';
class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ParentCount1:0,
            
        }
    }
    onParentIncremant = () => {
        this.setState({parentCount1:this.state.ParentCount1 + 1})
    }
    render() {
        console.log('parent');
        return (
            <ChildCounter onParentIncremant={this.onParentIncremant} parentCounter={this.state.ParentCount1}/>
            
            )
    }
}
class ChildCounter extends React.Component {
    state = {
        childCounter1:0,
        childCounter2:0
    };
    onIncreament = () => {
        this.props.onParentIncremant();
        this.setState({
            childCounter1:this.state.childCounter1 + 1,
            childCounter2:this.state.childCounter2 + 1
        })
    }
    render() {
        console.log('child')
        return (
            <button onClick={this.onIncreament}>click me</button>
            )
    }
}



ReactDOM.render(<Parent />, document.getElementById('root'));
