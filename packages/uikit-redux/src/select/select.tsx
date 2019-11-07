import * as React from 'react'
import { Select } from '@olegsmetanin/uikit'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'

export const select = (ValueComponent) => ({name, value}) => {
  const resolvedValue = useSelector((state: any) => state.select[name])


  /// useDispatch
    // const resolvedValue = {id: value, customer: 'Customer', status: 'NEW'}
    const resolvedOptions = []
    // resolvedValue,
    //     {id: value+1, customer: 'Customer1', status: 'NEW1'}
    // ]

    return (
            <Select>
              {name}:{value}
      <Select.Value>
        <ValueComponent {...resolvedValue}/>
      </Select.Value>

        {resolvedOptions.map(option =>
         <Select.Option>
          <ValueComponent {...option}/>
          </Select.Option>
        )}

    </Select>
    )


}


// const {resolveActions, filterActions, selectSagas, } = selectDucks(
//   actionPrefix,
//   url,
//   statePath)

// state: {
//   select: {
//     [cid]
//   }
//   cachedSelect: {
//     [id]
//   }
// }

// export const OrderSelect = select({
//   resolveActions,
//   filterActions,
//   ValueComponent: OrderValue
// })

// <OrderSelect cid={guid} value={this.props.order_id}/>

// <OrderCard cid={}>
//   <OrderSelect cid={}></OrderSelect>
// </OrderCard>



// selectDucks

// {
//  yield put

// const formData = yield call(api)

// yield all[put('ORDER', formData.order_id)]

// yield put('fORM LOADED')

// }



// const
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