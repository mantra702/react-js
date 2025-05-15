import { useDispatch, useSelector } from 'react-redux';
import iconMargin from '../utills/iconStyle';
import { deleteUser } from '../Redux/Actions/crudAction';
import { useNavigate } from 'react-router';
import { DEC, INC, RESET } from '../Redux/Actions/ActionType';
const Home = () => {

    const allUsers = useSelector(state => state.crud);
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <>
        <div className="d-flex justify-content-center">
            <div className="col-6 mt-5">
                <h1 style={{ textAlign: 'center' }}>View Users</h1>
                {allUsers.length > 0 ? <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user, index) => {
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-warning" onClick={() => navigate('/edit', {state : user})}><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" style={iconMargin} onClick={() => dispatch(deleteUser(index))} className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table> : <img style={{ justifyContent: 'center', height: '50vh' }} src='https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif' />}
                <div className="text-center mt-5 ">
                     <h4>Counter: {counter}</h4>
                     <button className="btn btn-outline-success mx-1" onClick={() => dispatch(INC())}>+</button>
                     <button className="btn btn-outline-primary mx-1" onClick={() => dispatch(RESET())}>Reset </button>
                      <button className="btn btn-outline-danger mx-1" onClick={() => dispatch(DEC())}>-</button>
               </div>

            </div>
        </div>
    </>
}

export default Home;