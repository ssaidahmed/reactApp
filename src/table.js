import React, {Component} from 'react'
import Workform from './modal_formworks'
var id = 0;
class Tablewor extends Component{

    constructor(props){
        super(props)

        this.state={
            row:'',
            worker: new Map([[id,{
                id:id++, 
                firstLastName:'Petiy Petrov Ivanovich',
                position:'meneger',
                wage:100000 
            }],[id,{
                id:id++, 
                firstLastName:'Danil Vetrov Ovich',
                position:'gid',
                wage:100000 
            }],
            [id,{
                id:id++, 
                firstLastName:'Vlad Romanovich Ivanov',
                position:'top-meneger',
                wage:1000000000 
            }]])
        }       

        
    }
    addWorker = (value)=>{
    alert('tabless')
    if(value.firstLastName===''){
      alert('поля не должны быть пустыми!')// можно было сделать и для других полей,но я думаю для тренировки это не обязательно 
      return;
    }

    if(value.id === ''){
        value.id = id++;
        
    }
    this.state.worker.set(Number(value.id), value);
    
    
    this.setState({
      worker:this.state.worker,
      row:''
    });


  }
   deleteWorker = (id) => {
      if(this.state.worker.delete(Number(id))){
        this.setState({
          worker: this.state.worker,
          row:''
        })
        alert('запись успешно удалена');
      }
   }
   
   
   editWorker = (id) =>{
     
      this.setState({
        row:this.state.worker.get(Number(id)),
        
      });

   }
    componentDidMount(){
        
        this.props.onGetWorkers(this.state.worker);//для упрощения итерации по мапе я тут вызывал с методом values() , но когда читал в другом компоненте
        //еще раз, итерируемфй объект становился пустым, потому что проходил по значениям и не возвращал указатель в начало
    }
    
    render(){
        
        var data = this.state.worker;
        
        var arr = [];
    
    
        if(data.size > 0){
            var i=0;
            for(let item of data.values()){
                arr.push(<tr key={i++}>
                <td className='text'>{item.id}</td>
                <td className='text'>{item.firstLastName}</td>
                <td className='text'>{item.position}</td>
                <td className='text'>{item.wage}</td>
                <td className='text' ><button className='buttt' onClick={() => this.editWorker(item.id)}>edit</button></td>
                <td className='text' ><button className='buttt' onClick={() => this.deleteWorker(item.id)}>delete</button></td>
                </tr>);
            
            }
            
        }

        return(
            <div className="works">
       
                <table className='ttabe'>
                    <thead>
                        <tr>
                            <td className='text'><strong>Id</strong></td>
                            <td className='text'><strong>firstLastName</strong></td>
                            <td className='text'><strong>position</strong></td>
                            <td className='text'><strong>wage</strong></td>
                            <td className='text'><strong>Edit</strong></td>
                            <td className='text'><strong>Delete</strong></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        
                            {arr}
                        
                    </tbody>
                </table>
                <Workform bool={false} data={this.state.row} onAddTour={this.addWorker}/>
           </div>
        )
    }


}
export default Tablewor;