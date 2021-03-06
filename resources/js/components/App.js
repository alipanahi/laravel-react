import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form/Form' 
import Questions from './question/Questions'
class App extends React.Component {
  state = {
      category:0,
      difficulty:"",
      quiz:false
  }
  handleData = formData =>{//it is called from form.js
    
      this.setState({
          category:formData.category,
          difficulty:formData.difficulty,
          quiz:true
        })
  }
  render(){
    return (
      <main className="App">
        {
          this.state.quiz ?
          <Questions category={this.state.category} difficulty={this.state.difficulty}/>
          :
          <Form handleData={this.handleData}/>
        }
      </main>
      
    )
  }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
