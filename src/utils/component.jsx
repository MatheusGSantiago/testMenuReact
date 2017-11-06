import React, {Component} from 'react'

function If (props) {
    if(props.isValid)
        return props.children

    return false   
}

function ChildrenWithProps (children, props) {
    return React.Children.map(props.children, child => React.cloneElement(child, {...props}))
}


class Cols extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]} `
        if(cols[1]) classes += `col-sm-${cols[1]} `
        if(cols[2]) classes += `col-md-${cols[2]} `
        if(cols[3]) classes += `col-lg-${cols[3]} `

        return classes
    }
    render() {
        const cols = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={cols}>
                {this.props.children}
            </div>
        )
    }
}

// function Validate(props) {
//     return <If isValid={!props.hidden}/>
// }

export { If, Cols, ChildrenWithProps }