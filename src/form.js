import React, {Component} from 'react';

class Forms extends Component{

constructor(props){
    super(props);
    
    this.state={
      
      id:'',
      tour:'',
      dateOfDep:'',
      dateOfReturn:'',
      countPiple:'',
      responsibleForTour:'',

    }

}

handleChange=(event)=>{
    
    this.setState({
        id: event.target.id.value,
        tour: event.target.tour.value,
        dateOfDep: event.target.dateDep.value,
        dateOfReturn: event.target.dateReturn.value,
        countPiple: event.target.count.value,
        responsibleForTour:event.target.responsibleForTour.value
    })
}

 
addTour=(event)=>{
    
    var objTour={};
    objTour.id = event.target.id.value;
    objTour.tour = event.target.tour.value;
    objTour.dateOfDep = event.target.dateDep.value;
    objTour.dateOfReturn = event.target.dateReturn.value;
    objTour.countPiple = event.target.count.value;
    objTour.responsibleForTour = event.target.responsibleForTour.value;
    this.props.onHandlerObj(objTour);// вызов метода всплывает по компонентам передавая данные родителю компоненту для добавления данных в мапу
    this.props.onSubmitForm();// это для закрытия поля при редактировании и отправки данных
    event.target.id.value ='';
    event.target.tour.value='';
    event.target.dateDep.value='';
    event.target.dateReturn.value='';
    event.target.count.value='';
    event.target.responsibleForTour.value='';
    
   event.preventDefault(); 
   
}

    render(){
       var data = this.props.data;
      
       var arr = [];
       var i =0;
       const work = this.props.worker;
       for(let amount of  work){
           
           arr.push(<option key={i++} value={amount[1].firstLastName}>{amount[1].firstLastName}</option>);
       }
    
       
       return( <form onSubmit={this.addTour}>
                
                <input name='id' type='hidden' value={data===undefined ? '' : data.id} />
                
                <label>
                    Tour:
                    <input name='tour' type='text' value={data===undefined ? '' : data.tour} onChange={this.handleChange}/>
                </label><br />
                <label>
                    Date dep:
                    <input name='dateDep' type='text' value={data===undefined ? '' : data.dateOfDep} onChange={this.handleChange}/>
                </label><br />
                <label>
                    Date return:
                    <input name='dateReturn' type='text' value={data===undefined ? '' : data.dateOfReturn} onChange={this.handleChange}/>
                </label><br />
                <label>
                    Count piple:
                    <input name='count' type='number' value={data===undefined ? '' : data.countPiple} onChange={this.handleChange}/>
                </label><br />
                <label>
                    ResponsibleForTour:
                    <select name='responsibleForTour' type='text' onSelect={this.handleChange}>
                        <option value={data===undefined ? '' : data.responsibleForTour}>{data===undefined ? '' : data.responsibleForTour}</option>
                        {arr}
                    </select>
                </label><br />
                <input type="submit" value="Submit" />
            </form>);
    }
}

export default Forms;