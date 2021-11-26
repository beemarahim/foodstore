import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchAdminOrder} from './../../redux/Orders/orders.actions'
import './styles.scss'

const mapState =({ordersData})=>({
    orders:ordersData.orders
})

const AdminOrder =props=>{
    const dispatch = useDispatch();
    const {orders} = useSelector(mapState)
    useEffect(()=>{
        dispatch(
            fetchAdminOrder()
        )
    },[])


    return(
        <div>
            <div className="manageProducts">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h1>Manage Orders</h1>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {orders.map((order,index)=>{
                                                    const {
                                                        orderCreatedDate,
                                                        orderTotal,
                                                        orderUserID
                                                    }=order;
                                                    return(
                                                        <tr key={index}>
                                                            <td>
                                                                {orderCreatedDate}
                                                            </td>
                                                            <td>
                                                                {orderTotal}
                                                            </td>
                                                            <td>
                                                                {orderUserID}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminOrder;