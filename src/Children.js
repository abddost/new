import React, { Component } from 'react'

export class Children extends Component {
    constructor(props){
        super(props)
        this.state = this.props
        console.log('child-constructor');
        
    }
    componentDidMount(){
        console.log('child-didmount');
        
    }
    componentWillReceiveProps(nextProps){
        console.log('chold-recieveprops');
        
    }
    componentWillUpdate(nextProps, nextState){
        console.log('child-willUPDATE');
        
    }
    componentDidUpdate(prevProps, prevState){
        console.log('child-updated');
        
    }
    render() {
        console.log('child-render');
        
        return (
            <div>
                <h1>{this.state.value}</h1>
            </div>
        )
    }
}

export default Children
