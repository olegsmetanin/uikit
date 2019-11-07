import * as React from 'react'

// {React.cloneElement(children, { value })}


const Select = (props) => {
  var selectValue
  var selectOptions: any[] = []
  React.Children.forEach(props.children, (child) => {
    if (child.type && (child.type == Select.Value)) {
        selectValue = child
    }
    if (child.type && (child.type == Select.Option)) {
      selectOptions.push(child)
    }
  })

  return (
    <div>
      SelectValue
      {selectValue}
      SelectOptions
      {selectOptions.map(optionComponent => optionComponent)}
    </div>
  )
}

Select.Value = ({children}) => {
  return (children)
}

Select.Option = ({children}) => {
  return (children)
}


export { Select }