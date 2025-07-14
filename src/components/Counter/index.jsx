import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { increment, decrement } from '../../features/counter/counterSlice';
import './style.css';

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h2>Counter</h2>
            <div className="d-flex align-items-center gap-3">
                <button className="btn btn-primary" onClick={() => dispatch(decrement())}>-</button>
                <span className="fs-3">{count}</span>
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    );
};

export default Counter; 