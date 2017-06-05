

import React, { Component } from 'react';
import Forms from './form';
import logo from './logo.svg';
import Tablewor from './table'
import Workform from './modal_formworks'
var id = 0; //  наверное так делать нельзя, но для уникальности и инкремента ид сделал

class Home extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      data: new Map(),//хештаблица - наиболее подходящяя структура данных для быстрой вставки, удаления и поиска. O(1) 
      row:'',
      workers:''
    };
    
    this.state.data.set(id, {
      id:id++,
      tour:'Tailand',
      dateOfDep: new Date().toLocaleTimeString(),//можно сделать и правильнее, но это не важно
      dateOfReturn: new Date().toLocaleTimeString(),
      countPiple:10,
      responsibleForTour:'Иван Иванов Иванович'

    });
    this.state.data.set(id, {
      id:id++,
      tour:'India',
      dateOfDep: new Date().toLocaleTimeString(),
      dateOfReturn: new Date().toLocaleTimeString(),
      countPiple:10,
      responsibleForTour:'Иван Иванов Петрович'

    });
    
  }
  addTour = (value)=>{
    
    if(value.tour===''){
      alert('поля не должны быть пустыми!')// можно было сделать и для других полей,но я думаю для тренировки это не обязательно 
      return;
    }

    if(value.id === ''){
        value.id = id++;
        
    }
    this.state.data.set(Number(value.id), value);
    
    
    this.setState({
      data:this.state.data,
      row:''
    });


  }
   deleteTour = (id) => {
      if(this.state.data.delete(Number(id))){
        this.setState({
          data: this.state.data,
          row:''
        })
        alert('запись успешно удалена');
      }
   }
   
   getValuesWorkers=(values)=>{
     
      this.setState({
        workers:values
      })
   }
   
   editTour = (id) =>{
     
      this.setState({
        row:this.state.data.get(Number(id)),
        
      });

   }
  render() {
    var data = this.state.data;
    
    var arr = [];
    
    
    if(data.size > 0){
        var i=0;
        for(let item of data.values()){
            arr.push(<tr key={i++}>
            <td className='text'>{item.id}</td>
            <td className='text'>{item.tour}</td>
            <td className='text'>{item.dateOfDep}</td>
            <td className='text'>{item.dateOfReturn}</td>
            <td className='text'>{item.countPiple}</td>
            <td className='text'>{item.responsibleForTour}</td>
            
            <td className='text' ><button className='buttt' onClick={() => this.editTour(item.id)}>edit</button></td>
            <td className='text' ><button className='buttt' onClick={() => this.deleteTour(item.id)}>delete</button></td>
            </tr>);
         
        }
        
    }
    
    return (
      <div className="main">
         
          <hr/>
          <table className='ttable'>
              <thead>
                  <tr>
                      <td className='text'><strong>Id</strong></td>
                      <td className='text'><strong>Tour</strong></td>
                      <td className='text'><strong>Date dep</strong></td>
                      <td className='text'><strong>Date return</strong></td>
                      <td className='text'><strong>Count piple</strong></td>
                      <td className='text'><strong>ResponsibleForTour</strong></td>
                      <td className='text'><strong>Edit</strong></td>
                      <td className='text'><strong>Delete</strong></td>
                  </tr>
              </thead>
              
              <tbody>
                
                      {arr}
                  
              </tbody>
        </table>
        <Workform bool={true} worker={this.state.workers} data={this.state.row} onAddTour={this.addTour}/>
        <hr/>
        <Tablewor onGetWorkers={this.getValuesWorkers} /> 
        
      </div>
    );
  }
}

export default Home;
