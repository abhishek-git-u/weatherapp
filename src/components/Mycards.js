
import React, { Component } from 'react'
import axios from 'axios';
import WeatherCards from './WeatherCards';

export default class Mycards extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isHidden:'true'
        }
    }

    myfun=()=>{
        var date=this.props.date.split(" ")
        document.getElementById("moreinfo"+this.props.date).style.display=""
    
   
    }

    myfun2=()=>{
        
        var date=this.props.date.split(" ")
        document.getElementById("moreinfo"+this.props.date).style.display="none"
    }
    
       
    

    render() {
        var mydate = new Date(this.props.date); 
        var date=this.props.date.split(" ")
        var day;
        switch (mydate.getDay()) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
               day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
          }
        return (
            <div >
            <div class="card card-border-2 border-dark  bg-warning p-3"  onMouseLeave={this.myfun2} onClick={this.myfun}>
                <h5 class="card-title text-dark">{this.props.weathermain.toUpperCase()}</h5>        
                <img class="card-img mx-auto bg-transparent img-responsive" style={{width:100}} src= {"http://openweathermap.org/img/wn/" +this.props.icon+ ".png"}  alt="Card image cap" />
                
                <div class="card-body "> 
                 <p class="card-text text-primary font-italic">{this.props.description.toUpperCase()}</p>
                
                 <p class="card-text text-dark text-muted">{date[0]}<br></br><small class="text-muted">Time : {mydate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</small></p>     
                 <div><h5 class="text-success">{day.toUpperCase()}</h5></div>
                 </div>  
                 </div>
                 <div class="card m-6 bg-info border-dark p-8" id={"moreinfo"+this.props.date}  style={{display:"none"}}><p  class="text-white bg-info">Humidity: {this.props.humidity}%<br/>Max Temp: {this.props.maxtemp } °C<br/>Min Temp: {this.props.mintemp } °C<br/>Wind Speed:  {this.props.windspeed} km/h</p>      
                 </div>
            </div>
             
        )
    }
}

