import { useDispatch } from 'react-redux'
import { addMoney, removeMoney } from './store'

export default function Button() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addMoney(10000))}>
        Add addMoney 10000
      </button>
      <button onClick={() => dispatch(removeMoney(5000))}>
        Remove removeMoney 5000
      </button>
    </div>
  )
}