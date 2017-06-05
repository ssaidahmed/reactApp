import React, {Component} from 'react';

class Formsemploy extends Component{

constructor(props){
    super(props);
    
    this.state={
      
      id:'',
      firstLastName:'',
      position:'',
      wage:''

    }

}

handleChange=(event)=>{
    
    this.setState({
        id: event.target.id.value,
        firstLastName: event.target.firstLastName.value,
        position: event.target.position.value,
        wage: event.target.wage.value
    })
}

 
addEmploy=(event)=>{
    
    var objTour={};
    objTour.id = event.target.id.value;
    objTour.firstLastName = event.target.firstLastName.value;
    objTour.position = event.target.position.value;
    objTour.wage = event.target.wage.value;
    
    this.props.onHandlerObj(objTour);// вызов метода всплывает по компонентам передавая данные родителю компоненту для добавления данных в мапу
    this.props.onSubmitForm();// это для закрытия поля при редактировании и отправки данных
    event.target.id.value ='';
    event.target.firstLastName.value='';
    event.target.position.value='';
    event.target.wage.value='';
    
    
   event.preventDefault(); 
   
}

    render(){
       var data = this.props.data;
      
       
       return( <form onSubmit={this.addEmploy}>
                
                <input name='id' type='hidden' value={data===undefined ? '' : data.id} />
                
                <label>
                    FirstLastName:
                    <input name='firstLastName' type='text' value={data===undefined ? '' : data.firstLastName} onChange={this.handleChange}/>
                </label><br />
                <label>
                     Position:
                    <input name='position' type='text' value={data===undefined ? '' : data.position} onChange={this.handleChange}/>
                </label><br />
                <label>
                     Wage:
                    <input name='wage' type='text' value={data===undefined ? '' : data.wage} onChange={this.handleChange}/>
                </label><br />
                <input type="submit" value="Submit" />
            </form>);
    }
}

export default Formsemploy;