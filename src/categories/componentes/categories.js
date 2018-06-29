import React, { Component } from 'react'
import PlayList from '../../playlist/componentes/playlist'

class Categories extends Component {
    render() {
        const categories = this.props.data.categories  
         
        return (
            <div>
                { 
                    categories.map(category => {
                        <PlayList playlist = {category.playlist} />
                    })                                      
                }
            </div>
        )
    }
}


export default Categories