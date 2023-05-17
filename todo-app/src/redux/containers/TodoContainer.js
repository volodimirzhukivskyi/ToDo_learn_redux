import { connect } from 'react-redux';
import {removeTodo,changeCompleted} from "../actions/actions";
import {Todo} from "../../components/Todo";

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo:(id)=>dispatch(removeTodo(id)),
        changeCompleted:(id)=>dispatch(changeCompleted(id))
    }
}
export  default  connect(null,mapDispatchToProps)(Todo)