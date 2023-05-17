import { connect } from 'react-redux';
import {addTodo} from "../actions/actions";
import {AddToDo} from "../../components/AppToDo";

const mapDispatchToProps = (dispatch) => {
  return {
      addToDo:(obj)=>dispatch(addTodo(obj))
  }
}
export  default  connect(null,mapDispatchToProps)(AddToDo)