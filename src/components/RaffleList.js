import React from 'react'
import './RaffleList.css'

function random(n) {
    return Math.floor(Math.random() * n)
}
class RaffleList extends React.Component {

    constructor(props) {
        super(props)
        this.state = { nameList: [], selectedName: null, name: ''}
        this.addName = this.addName.bind(this)
        this.removeName = this.removeName.bind(this)
    }

    addName() {
        if(this.state.name !== '') {
            this.setState({ nameList: [...this.state.nameList, this.state.name], name: ''});
        }

    }
    removeName(index) {
        this.state.nameList.splice(index, 1)
        this.setState({ nameList: [...this.state.nameList]})
    }

    render() {
        return (
            <div className='Form'>
                <div className='AddForm'>
                    <input className='AddName' type='text' value={this.state.name} onChange={(e) => {
                        this.setState({name: e.target.value})
                        }}/>
                        <button className='AddButton' onClick={() => this.addName()}>&#x2b;</button>
                </div>

                <button className='RaffleButton' onClick={() => {
                    this.setState({selectedName: random(this.state.nameList.length)})
                }}>Raffle</button>
                
                {this.state.nameList.map((name, i) => (<div className='List'><p className='NameList' >{name}</p>
                    <button className='RemoveButton' onClick={() => this.removeName(i)}>&#x2212;</button>
                </div>))}

                <div className='Result' >
                    Winner:
            {this.state.selectedName !== null && <h2 className='DisplayWinner'>{this.state.nameList[this.state.selectedName]}</h2>}
                </div>
          </div>
        )
    }
}
export default RaffleList