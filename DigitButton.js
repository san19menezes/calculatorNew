import ACTIONS from './App';
const DigitButton =({dispatch, digit}) =>{
  return (
    <button onClick={()=>dispatch({type:})}>{digit}</button>
  )

}