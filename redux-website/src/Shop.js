import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from 'redux';
import {actionCreators} from "./state/index"


const Shop = () => {

    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount)
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        <button className='btn btn-primary mx-2' onClick={() => {withdrawMoney(100)}}>-</button>
        update Balance ({balance})
        <button className='btn btn-primary mx-2' onClick={() => {depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop;
