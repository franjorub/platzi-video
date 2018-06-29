import React, { Component } from 'react'
import Media from './media'

class PlayList extends Component {
   
    render() {
        const playlist = this.props.playlist
     
        return (
            <div>
            {
                playlist.map((item) => {
                    return <Media {...item} key={item.id}/>
                })
            }                
            </div>
        )
    }
}

export default PlayList