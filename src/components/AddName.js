import React from 'react'

function random(n) {
    return Math.floor(Math.random() * n)
}
class AddName extends React.Component {

    state = { nameList: [], selectedName: null };

    addName() {
      this.setState({ nameList: [...this.state.nameList, this.state.name]});
    }

    render() {
        return (
            <div>
                <input className='Name' type='text' value={this.state.name} onChange={(e) => {
                    this.setState({name: e.target.value})
                }}/>
                <button onClick={() => this.addName()}>
                    &#x2b;
                </button>
                {this.state.nameList.map((name) => name)}
                <button onClick={() => {
                    this.setState({selectedName: random(this.state.nameList.length)})
                }}>Raffle</button>
                <div>
            {this.state.selectedName !== null && <h2>{this.state.nameList[this.state.selectedName]}</h2>}
                </div>
          </div>
        )
    }
}
export default AddName