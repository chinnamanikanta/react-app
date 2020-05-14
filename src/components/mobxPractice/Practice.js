import {observable,autorun,action,computed,reaction,get,set,extendObservable} from "mobx";
import {observer} from "mobx-react";
import React from 'react';



// const map = observable.map({ key: "value",key1:"value" });
// map.set("key", "new value","key1","hdgssdh","key2","jhgf");
// console.log(map);


// const person = observable({
//   age: "23",
//   address: {
//     city: "Guntur",
//     state: "Andhra Pradesh",
//   },
//   hobbies: ["cricket", "music"],
// });

// const title = person.age;
// autorun(() => {
//   console.log(title);
// });


// title = "25";



// const obj = {
//     key:"value"
// }
// obj.key1 = "value1";
// console.log(obj);

// const list = observable([1, 2, 4]);
// list[6] = 8;
// console.log(list);

// const person = observable.box({
//     firstName: "Clive Staples",
//     lastName: "Lewis"
// });
// person.set("firstName","kjhd","lastName","hjghfhd","middleName","sjufjc");
// console.log(person);
// const temperature = observable.box(20)
// temperature.set(25)
// console.log(temperature);

// var numbers = observable([1, 2, 3])
// var sum = numbers.reduce((a, b) => a + b, 0)

// var disposer = autorun(() => console.log(sum.get()))


// numbers.push(4)

// disposer();

// numbers.push(5)
// console.log(numbers)
// won't print anything, nor is `sum` re-evaluated



// const age = observable.box(22);

// const dispose = autorun(
//     () => {
//         if (age.get() < 0) throw new Error("Age should not be negative");
//         console.log("Age", age.get());
//     },
//     {
//         onError(e) {
//             window.alert("Please enter a valid age");
//         }
//     }
// );



// const todos = observable([
//     {
//         title: "Make coffee",
//         done: true
//     },
//     {
//         title: "Find biscuit",
//         done: false
//     }
// ]);



// const reaction1 = reaction(
//     () => todos.length,
//     length => console.log("reaction 1:", todos.map(todo => todo.title).join(", "))
// );



// const reaction2 = reaction(
//     () => todos.map(todo => todo.title),
//     titles => console.log("reaction 2:", titles.join(", "))
// );


// const autorun1 = autorun(() => console.log("autorun 1:", todos.map(todo => todo.title).join(", ")));

// todos.push({ title: "explain reactions", done: false });

// todos[0].title = "Make tea";



// const counter = { count: 0 }

// const reaction3 = reaction(
//     () => counter.count,
//     (count, reaction) => {
//         console.log("reaction 3: invoked. counter.count = " + count);
//         reaction.dispose();
        
//     }
// );


// counter.count = 1;
// counter.count = 2;
// console.log(counter.count);


// const twitterUrls = observable.map({
//     John: "twitter.com/johnny"
// });



// autorun(() => {
//     console.log(twitterUrls.get("Sara"));
// });

// twitterUrls.set("Sara", "twitter.com/horsejs");

//message

// let message = observable({
//     title: "Foo",
//     author: {
//         name: "Michel"
//     },
//     likes: ["John", "Sara"]
// });

// autorun(() => {
//     console.log(message.title)
// })
// message = observable({ title: "Bar" })

// var title = message.title
// autorun(() => {
//     console.log(title)
// })
// message.title = "Bar"

// autorun(() => {
//     console.log(message.author.name)
// })
// message.author.name = "Sara";
// message.author = { name: "John" }

// const author = message.author
// autorun(() => {
//     console.log(author.name)
// })

// message.author.name = "Sara"
// message.author = { name: "John" }

//Won't trigger a re-run


// autorun(() => {
//     console.log(message.likes.length)
// })
// message.likes.push("Jennifer");

// autorun(() => {
//     console.log(message.)
// })
// message.likes.push("Jennifer")

// autorun(() => {
//     console.log(message.postDate)
// })

// message.postDate = new Date()


// autorun(() => {
//     console.log(get(message, "postDate"))
// })
// set(message, "postDate", new Date())

// autorun(() => {
//     console.log(message.postDate)
// })
// extendObservable(message, {
//     postDate: new Date()
// }
// );

// message.postDate = new Date();


// const twitterUrls = observable.map({
//     John: "twitter.com/johnny",
//     messages:['hi','hello']
// })

// const {messages} = twitterUrls;
// autorun(() => {
//     console.log(twitterUrls.get("messages"));
// })

// twitterUrls.set('messages',['abcd']);
//console.log(twitterUrls);




//   @observable author = null



//   @computed get authorName() {
//     return this.author || 'Anonymous'
//   }
  

//   onmessage=()=>{
//       this.author = "iuytr";
//   }



// render(){
    
//     return (
//         <div>
//         {this.authorName}
//         <button onClick={this.onmessage}>Click</button>
//         </div>
        
//         )
// }



// render(){
//     console.log("1");
//     return(
//         <div>
//         <button  onClick={store.incrementCount}>incrementCount</button>
//         <div>{store.total}
//         </div>
 
//         </div>
//         )
// }
    
// }

// class Store{
//     @observable list;
//     @observable count;
//     constructor(){
//         this.list=['dkj','hdag','ashh','ajsh'];
//         this.count = 0;
//     }
//     @computed get total(){
//         return this.count;
//     }
//     @action.bound
//     incrementCount(){
//         this.count+=2;
//         this.count+=3;
//     }
// }

// const store =new Store();


// const message = observable({ title: "hello" });``


// autorun(() => {
//     console.log(message);
// })
// message.title = "Hello world"

//   @observable price = 0;
//   @observable amount = 0;
//   @observable currency = "Rupees";

//   @action
//   setPriceAndAmountAndCurrencyAsynchronously = async () => {
//     this.currency = "Dollars";

//     // Suppose we got price and quantity from server response
//     const promise = new Promise((resolve, reject) => {
//       resolve({
//         price: 0,
//         amount: 10,
//       });
//     });
//     const { price, amount } = await promise;
//     this.setPriceAndAmount(price, amount);
//   };

//   setPriceAndAmount = (price, amount) => {
//     this.price = price;
//     this.amount = amount;
//   };

//   @computed
//   get total() {
//     return this.price * this.amount + " " + this.currency;
//   }
// }

// const practice = new Practice();

// autorun(() => {
//   console.log("autorun called", practice.total);
// });

// practice.setPriceAndAmountAndCurrencyAsynchronously();


// class CounterChild1 extends React.Component {
//   render() {
//     console.log("render CounterChild1");

//     return <p>childCounter1: {this.props.childCounter1}</p>;
//   }
// }

// class CounterChild2 extends React.Component {
//   render() {
//     console.log("render CounterChild2");

//     return <p>childCounter2: {this.props.childCounter2}</p>;
//   }
// }

// @observer
// class Practice extends React.Component {
//   @observable childCounter1 = 2;
//   @observable childCounter2 = 123;

//   @action.bound
//   onUpdateCounterChild1() {
//     this.childCounter1 += 3;
//   }

//   @action.bound
//   onUpdateCounterChild2() {
//     this.childCounter2 -= 12;
//   }
//   @action.bound
//   onUpdate() {
//     this.onUpdateCounterChild1();
//     this.onUpdateCounterChild2();
//   }

//   render() {
//     console.log("render CounterParent");
//     return (
//       <div>
//         <CounterChild1 childCounter1={this.childCounter1} />
//         <CounterChild2 childCounter2={this.childCounter2} />
//         <button onClick={this.onUpdate}>Update count</button>
//       </div>
//     );
//   }
// }




// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class Practice extends React.Component {
//   @observable count = 34;
//   @observable isCountChanged = false;

//   @action.bound
//   onChangeCount() {
//     this.isCountChanged = true;
//     this.count = this.count + 13;

    
//     setTimeout(() => {
      
//       this.isCountChanged = true;
//     }, 0);
//   }

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <button onClick={this.onChangeCount}>Change count</button>
//         <p>{this.isCountChanged ? "Count Changed" : ""}</p>
//       </div>
//     );
//   }
// }


// @observer
// class Child1 extends React.Component {
//   render(){
//         console.log("render Child1");
//   return(
//     <div>
//     <p>{this.props.count2}</p>
//     </div>
    
//     )
  
//   }
// }
// @observer
// class Child2 extends React.Component {
//   render(){
//     console.log("render Child2");
//   return(
//     <div>
//         <p>{this.props.count1}</p>
//     </div>
    
//     )
  
//   }
  
// }
// @observer
// class Child3 extends React.Component {
  
  
//   render(){
//     console.log("render Child3");
//   return(
//     <div>
//     <p>{this.props.count}</p>
//     </div>
    
//     )
  
//   }
// }
// @observer
// class Practice extends React.Component {
//   @observable count = 0;
//   @observable count1 = 0;
//   @observable count2 = 0;
//   @observable count3 = 0;
//   @action.bound
//   update(){
//     this.count = this.count + 1;
//     this.count1 = this.count1 + 2;
//     this.count2 = this.count2 + 3;
//     this.count3 = this.count3 + 4;
//   }
  
  
//   render(){
//     console.log("render parent");
//     return (
//       <div>
//       <div>{this.count}</div>
//       <Child1 count = {this.count1}/>
//       <Child2 count1 = {this.count2}/>
//       <Child3 count2 = {this.count3}/>
//       <button onClick={this.update}>Click me</button>
  
//       </div>
      
//       )
//   }
// }
// @observer
// class Practice extends React.Component {
//   @observable firstName = "chinna";
//   @observable secondName = "hari";
//   @observable lastName = "mani";
//   @computed get fullName(){
//     console.log("dshgf");
//     return this.lastName + " " + this.firstName + " " + this.secondName;
//   }
  
//   hari = () => {
//     this.firstName = "bala";
//     this.secondName = "krishna";
//     this.lastName = "jdhj";
//     this.secondName = "krishna";
//     this.lastName = "jdhj";
//     this.secondName = "krishna";
//     this.lastName = "jdhj";
//     this.secondName = "krishna";
//     this.lastName = "jdhj";
//   }
//   run=autorun(()=>{
//     console.log("auto run",this.fullName);
//   })
  
//   render(){
//     console.log("render");
//     return (
//       <div>
//       <div>{this.fullName}</div>
//       <button onClick = {this.hari}>click me</button>
//         </div>
      
//       )
//   }
// }

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  
};

export const ThemeContext = React.createContext(
  themes.dark
  ); 
class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme : themes.light
    };
    
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
        state.theme === themes.dark 
        ? themes.light :
          themes.dark
        
      }));
    }
  }
  
  render(){
    
    
    
  }
  
  
  
}













export default Practice;
