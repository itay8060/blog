import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () =>  async (dispatch, getState) => {
     await dispatch(fetchPosts()); 
//      const unqIds = _.uniq(_.map(getState().posts, 'userId'))
//      unqIds.forEach(id => dispatch(fetchUser(id)));

     _.chain(getState().posts).map('userId').uniq().forEach(id => dispatch(fetchUser(id))).value();
}

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts')
    
        dispatch({ type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = id => {
    return async (dispacth) => {
        const response = await jsonPlaceholder.get(`/users/${id}`)

        dispacth({ type: 'FETCH_USER', payload: response.data });
    }
};

// export const fetchUser = id => dispatch =>  _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispacth) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`)

//         dispacth({ type: 'FETCH_USER', payload: response.data });
// })
    