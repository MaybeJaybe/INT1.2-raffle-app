import React from 'react'
import './RaffleList.css'

function random(n) {
    return Math.floor(Math.random() * n)
}
class RaffleList extends React.Component {

    state = { nameList: [], selectedName: null };

    addName() {
      this.setState({ nameList: [...this.state.nameList, this.state.name]});
    }
    removeName(index) {
        this.state.nameList.splice(index, 1)
        this.setState({ nameList: [...this.state.nameList]})
    }

    render() {
        return (
            <div>
                <input className='AddName' type='text' value={this.state.name} onChange={(e) => {
                    this.setState({name: e.target.value})
                }}/>
                <button className='AddButton' onClick={() => this.addName()}>
                    &#x2b;
                </button>
                {this.state.nameList.map((name, i) => (<div>{name}
                    <button className='RemoveButton' onClick={() => this.removeName(i)}>-</button>
                </div>))}
                <button className='RaffleButton' onClick={() => {
                    this.setState({selectedName: random(this.state.nameList.length)})
                }}>Raffle</button>
                <div className='Result' >
                    Winner:
            {this.state.selectedName !== null && <h2>{this.state.nameList[this.state.selectedName]}</h2>}
                </div>
          </div>
        )
    }
}
export default RaffleList