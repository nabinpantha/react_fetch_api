import React, { Component } from 'react';


export default class FetchUser extends Component {

  state = {
    loading :true,
    person : null,
  };
  async componentDidMount() {
    

    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ person: data.results[0], loading : false })
        
  }
  render() {
    return (

      <div>
        <h5 className="card-title">{this.state.loading || !this.state.person ? (<div>loading...</div> 
        ): (
        <div>
          <img src ={this.state.person.picture.large} alt =""/>
          <p>Full Name: {this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</p>
         <p>Cell Phone Number: {this.state.person.cell}</p>
          <p>Date of Birth: {this.state.person.dob.date}</p>
          <p>Email ID : {this.state.person.email}</p>
          <p>Address: {this.state.person.location.city} {this.state.person.location.state} {this.state.person.location.country} {this.state.person.location.postcode}</p>
          <p>Nationality: {this.state.person.nat}</p>
          </div>
        )}</h5>
      </div>
    );
  }
}
