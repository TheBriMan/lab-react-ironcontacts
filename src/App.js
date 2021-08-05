import React, { Component } from 'react';
import contacts from "./contacts.json";
import ContactTR from './components/ContactTR';

class App extends Component {

  constructor(){
    super()

    let contactsList = []

    for (let i = 0; i < 5; i++) {
      contactsList.push({...contacts[i]})
    }

    this.state = {contactsList}

  }

  randomContact = ()=>{
    let randomInd = Math.floor(Math.random() * Object.keys(contacts).length + 4)
    const contactArray = this.state.contactsList
    contactArray.push({...contacts[randomInd]})
    this.setState(
      {contactsList:contactArray}
    )
  }

  sortByName = ()=>{
    let sortByName = this.state.contactsList.slice(); 
    sortByName.sort((a,b) => 
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    )
    this.setState({contactsList:sortByName})
  }

  sortByPopularity = ()=>{
    let sortByPopularity = this.state.contactsList.sort((a,b)=>b.popularity - a.popularity)
    this.setState({contactsList:sortByPopularity})
  }

  deleteRow(index){
    const contactArray=this.state.contactsList
    contactArray.splice(index,1)
    this.setState({contactsList:contactArray})
  }

  render() {
    return (
      <div className='App'>
        <h1 className='App-h1'>IronContacts</h1>
        <h2>Check out the celebrities list below and mess around with the buttons and stuff!</h2>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort List By name</button>
        <button onClick={this.sortByPopularity}>Sort List By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete Contact?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map((e,i)=> <ContactTR key={e.name} {...e} delete={()=>this.deleteRow(i)} />)}
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default App;
