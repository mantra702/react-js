import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, Reset } from '../actions/counteraction';

const Counter = () => {

    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    console.log(count);

    return <>
        <div style={{ textAlign: 'center', marginTop: "50px" }}>
            <h1>Couter : {count}</h1>

            <button onClick={() => dispatch(Increment())}>Increment (+)</button>
            <button onClick={() => dispatch(Reset())} style={{ margin: "0px 20px" }}>Reset</button>
            <button onClick={() => dispatch(Decrement())} >Decrement (-)</button>
        </div>
    </>
}

export default Counter;