import React, { Component } from 'react'

import Mycards from './Mycards'
import axios from 'axios';
import {Line} from 'react-chartjs-2';

const state = {
  
  datasets: [
    {
      label: '1',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'orange',
      borderColor: 'orange',
      borderWidth: 2,
      data: []
    },
    {
        label: '2',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        data: []
      },
      {
        label: '3',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'grey',
        borderColor: 'grey',
        borderWidth: 2,
        data: []
      },
      {
        label: '4',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 2,
        data: []
      },
      {
        label: '5',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 2,
        data: []
      }
      
  ]
}

const state2 = {
  
    datasets: [
      {
        label: '1',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'orange',
        borderColor: 'orange',
        borderWidth: 2,
        data: []
      },
      {
          label: '2',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'blue',
          borderColor: 'blue',
          borderWidth: 2,
          data: []
        },
        {
          label: '3',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'grey',
          borderColor: 'grey',
          borderWidth: 2,
          data: []
        },
        {
          label: '4',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'red',
          borderColor: 'red',
          borderWidth: 2,
          data: []
        },
        {
          label: '5',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 2,
          data: []
        }
        
    ]
  }

  const state3 = {
    labels: [],
    datasets: [
      {
        label: 'Max',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 2,
        data: []
      },
      {
          label: 'Min',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'red',
          borderColor: 'red',
          borderWidth: 2,
          data: []
        }
        
    ]
  }

export default class WeatherCards extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             weather:[],
             weather2:[],
             maxgraph:state,
             mingraph:state2,
             minmax:state3,
             isbuttonclicked:false,
                     }
    }
    
    

    async apicall(cityname,days) {
        const res=await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityname+'&appid=3c4d81109c08009c9a586ca38285fc76&units=metric');
        //console.log(response.data);
        if(res.ok){
        const response= await res.json();
         //this.setState({weather:res.data})
        console.log(res.ok)
         let temp=[];
         for(let i=0;i<8*days;i=i+8){
            temp.push(response.list[i]);
         }
         this.setState({
            weather:temp,
                   })

        let tem=[];
                   for(let i=0;i<40;i=i+8){
                      tem.push(response.list[i]);
                   }
                   this.setState({
                      weather2:tem,
                             })
          
        // max tem

        state.datasets[0].label=this.state.weather2[0].dt_txt.split(" ")[0]
        state.datasets[1].label=this.state.weather2[1].dt_txt.split(" ")[0]
        state.datasets[2].label=this.state.weather2[2].dt_txt.split(" ")[0]
        state.datasets[3].label=this.state.weather2[3].dt_txt.split(" ")[0]
        state.datasets[4].label=this.state.weather2[4].dt_txt.split(" ")[0]
        let temp2=[];
        for(let i=0;i<8;i++){
            temp2.push(response.list[i].main.temp_max);
         }
         state.datasets[0].data=temp2

        temp2=[];
        for(let i=8;i<16;i++){
            temp2.push(response.list[i].main.temp_max);
         }
         state.datasets[1].data=temp2

         temp2=[];
         for(let i=16;i<24;i++){
             temp2.push(response.list[i].main.temp_max);
          }
          state.datasets[2].data=temp2

          temp2=[];
          for(let i=24;i<32;i++){
              temp2.push(response.list[i].main.temp_max);
           }
           state.datasets[3].data=temp2

           temp2=[];
        for(let i=32;i<40;i++){
            temp2.push(response.list[i].main.temp_max);
         }
         state.datasets[4].data=temp2
        
         //Minimum 
         state2.datasets[0].label=this.state.weather2[0].dt_txt.split(" ")[0]
         state2.datasets[1].label=this.state.weather2[1].dt_txt.split(" ")[0]
         state2.datasets[2].label=this.state.weather2[2].dt_txt.split(" ")[0]
         state2.datasets[3].label=this.state.weather2[3].dt_txt.split(" ")[0]
         state2.datasets[4].label=this.state.weather2[4].dt_txt.split(" ")[0]
          temp2=[];
         for(let i=0;i<8;i++){
             temp2.push(response.list[i].main.temp_min);
          }
          state2.datasets[0].data=temp2
 
         temp2=[];
         for(let i=8;i<16;i++){
             temp2.push(response.list[i].main.temp_min);
          }
          state2.datasets[1].data=temp2
 
          temp2=[];
          for(let i=16;i<24;i++){
              temp2.push(response.list[i].main.temp_min);
           }
           state2.datasets[2].data=temp2
 
           temp2=[];
           for(let i=24;i<32;i++){
               temp2.push(response.list[i].main.temp_min);
            }
            state2.datasets[3].data=temp2
 
            temp2=[];
         for(let i=32;i<40;i++){
             temp2.push(response.list[i].main.temp_min);
          }
          state2.datasets[4].data=temp2
         



          //Minimum and max of particular time
         
        temp2=[];
         for(let i=0;i<5;i++){
             temp2.push(this.state.weather2[i].dt_txt.split(" ")[0]);
          }
        state3.labels=temp2

         temp2=[];
         let max=0
         for(let i=0;i<40;i++){
            if(max<response.list[i].main.temp_max){
                max=response.list[i].main.temp_max
            }
            if(i%8==0){
             temp2.push(max);
             max=0
            }
          }
          state3.datasets[0].data=temp2
 
         temp2=[];
         let min=99999
         for(let i=0;i<40;i++){
            if(min>response.list[i].main.temp_min){
                min=response.list[i].main.temp_min
            }
            if(i%8==0){
             temp2.push(min);
             min=99999
            }
          }
          state3.datasets[1].data=temp2
 
        // console.log(state3.label)
         

        //console.log(state.datasets[0].data)
        //console.log(this.state.weather)
        //console.log(state2.datasets[4].data)
        
        this.setState({
            maxgraph:state,
            mingraph:state2,
            minmax:state3,
            isbuttonclicked:true,
        })
        }
        else{
            this.setState({
                isbuttonclicked:false
            })
        }
    };

    searchfun=()=>{
        let temp=document.getElementById("citytextbox").value
        let days=document.getElementById("exampleFormControlSelect1").value
        this.apicall(temp,days)
    }  

    
    

    render() {
        //console.log(this.state.weather.list[0].main);
        //console.log(this.state.weather[1])
        let temp=this.state.weather.clouds    
        //console.log(temp)

       // {this.state.weather.map((w) => (
           // console.log(w)
         // ))}
         let response=<div>
         <div class="card-deck justify-content-center">
             {this.state.weather.map((w) => (
             <Mycards
               date={w.dt_txt}
               windspeed={w.wind.speed}
               humidity={w.main.humidity}
               maxtemp={w.main.temp_max}
               mintemp={w.main.temp_min}
               description={w.weather[0].description}
               icon={w.weather[0].icon}
               weathermain={w.weather[0].main}
             />
             
           ))}
            

         </div>
         <div class="container">
             
         <div class="row justify-content-center">
         <div class="col-7 bg-light  m-3 p-3">
             <Line
         data={this.state.minmax}
         options={{
             title:{
             display:true,
             text:'Min Max Temperature',
             fontSize:20,
             fontColor:'orange'
             },
             legend:{
             display:true,
             position:'right',
             fontColor:'orange'
             },
             labels: {
              fontColor: 'orange'
             },
             scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontColor: 'orange'
                  },scaleLabel: {
                    display: true,
                    labelString: 'Temperature',
                    fontColor: 'purple',
                    fontSize:20
                },
              }],
            xAxes: [{
                  ticks: {
                      fontColor: 'pink'
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Date',
                    fontColor: 'purple',
                    fontSize:20
                },
              }]
          } 
         }}

         
         />
         </div>
         
         </div>
         </div>
         </div>

         let r1=<div class="p-1 font-weight-bold">Enter City Name:<input  type="text" required id="citytextbox" class="form m-3 rounded" placeholder="Enter City Name"/>
          <label for="exampleFormControlSelect1">Select Number Of Days: </label>
          <input type='text' placeholder="Enter Number Of Days" class="form m-3 rounded" required id="exampleFormControlSelect1" ></input>
         <div type="Button" onClick={this.searchfun} class="btn btn-success border-dark font-weight-bold m-2 p-1 rounded">Search</div>
        </div>
         
        if(this.state.isbuttonclicked==true){
            return(<div>{r1}{response}</div>)
        }
        else{
        return(<div>{r1}</div>)
        }
        

    }
}