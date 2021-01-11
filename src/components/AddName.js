// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {addName} from '../actions'

// class AddName extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name:''
//         }
//     }
//     addNew() {
//         this.props.addName(this.state.name)
//         this.setState({name: ''})
//     }
//     render() {
//         return (
//             <div className="AddName">
//                 <input type="text" placeholder="+" value={this.state.name} onChange={(e) => {
//                     this.setState({name: e.target.value})
//                 }}
//                 />
//                 <button className="add-remove notice-color" 
//                 onClick={(e) => {
//                     this.newLine()
//                 }}
//                 >&#x2b;</button>
//             </div>
//         )
//     }
// }
// const mapStateToProps = ({nameList}) => {
//     return {

//     }
// }

// const mapDispatchToProps = () => {
//     return {
//         addName
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps())(AddName)