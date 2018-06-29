import React, { Component } from 'react';
import './media.css'
import PropTypes from 'prop-types'

class Media extends Component {

  state = {
    author: 'Leonidas Stevan'
  }
  // Forma de cambiar el state en ES6
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // }
  
  handleClick = (event) => {
    console.log(this.props.title);  
    this.setState({
      author: 'Ricardo Celis'
    })    
  }
  render() {
    // const styles = {
    //   container: {
    //     cursor: 'pointer',
    //     color: '#44546b',
    //     width: '260px',
    //     border: '1px solid red'
    //   }
    // } Asi uso estilos en linea

    //Las propiedades se reciben en el objeto props 
    

    return (
      <div className = "Media" onClick = {this.handleClick}>
        <div className = "Media-cover">
          <img
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
            className = "Media-image"
          />
        </div>
            <h3 className = "Media-title">{this.props.title}</h3>
            <p className = "Media-author">{this.state.author}</p>            
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
}

export default Media;

// Los métodos de los Componentes son llamados en momentos específicos:

// constructor cuando se crea el componente (como siempre)
// componentDidMount cuando el componente es agregado al DOM
// componentWillMount durante la renderización en el servidor
// componentWillUnmount cuando el componente está siendo eliminado
// shouldComponentUpdate luego de que el estado (state) o las propiedades (props) del componente han sido modificadas.
// componentWillUpdate y componentDidUpdate antes y después de que el componente se re-renderice.
// componentWillReceiveProps antes de que el componente haya recibido propiedades (props) cuto valor haya cambiado