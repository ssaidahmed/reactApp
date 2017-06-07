import React from 'react';

import Modal from 'react-modal';
import Forms from './form';
import Formsemploy from './Form_employees'
const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class Workform extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  addTour=(values)=>{
      
    this.props.onAddTour(values);
  }

  addEmploy=(values)=>{
      
    this.props.onAddTour(values);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
  componentWillReceiveProps(nextProps){
      
       if(nextProps.data !==''){
         this.openModal();
       } 
  }
  
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
      const data = this.props.data;
      const work = this.props.worker;
      const bool = this.props.bool;
      const form=[];
      if(bool){
          form.push(<Forms key={0} worker={work} data={data} onHandlerObj={this.addTour} onSubmitForm={this.closeModal} />)
      }else{
          form.push(<Formsemploy key={1} data={data} onHandlerObj={this.addEmploy} onSubmitForm={this.closeModal} />)
      }
    return (
      <div>
        <button onClick={this.openModal}>Add</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          
         {form}
         
        </Modal>
      </div>
    );
  }
}
export default Workform;