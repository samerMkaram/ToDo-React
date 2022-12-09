import React from "react";

class StateComponent extends React.Component{
    
render(){
    const {state} = this.props;
    if (state==='Complete') return <span>{state} 😎</span>
    else if (state==='Pending') return <span>{state} 😴</span>
    else if (state==='InProg') return <span>{state} 😲</span>
    else if (state==='Cancelled') return <span>{state} 😔</span>
    else return <span>{state} 🥶</span>
}
}

export default StateComponent