import * as React from 'react'
import { Select } from '@olegsmetanin/uikit'

// import { useDispatch } from 'react-redux'

export const select = (ValueComponent) => ({cid, value}) => {
    const resolvedValue = {id: value, cid: cid, customer: 'Customer', status: 'NEW'}
    return (
        <Select>
            <ValueComponent {...resolvedValue}/>
        </Select>
    )
}
// export const select = ({actions: {request, success, failure, cancel}, url, statePath, ValueComponent}) => ({cid, value}) => {
//   const dispatch = useDispatch()

//   const handleFilter = (q) => {
//     dispatch({actions.request})
//   }
//   return (
//     <Select onFilter={this.handleFilter}>
//       <Select.Value>
//         <ValueComponent value={value}/>
//       </Select.Value>
//       <Select.Options>
//         options.map(option =>
//           <ValueComponent value={option}/>
//         )
//       </Select.Options>
//     </Select>
//   )
// }