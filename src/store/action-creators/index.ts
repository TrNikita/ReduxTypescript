import * as UserActionCreators from '../action-creators/user'
import * as TodoActionCreators from '../action-creators/todos'
import * as PostActionCreators from '../action-creators/posts'

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...PostActionCreators
}
