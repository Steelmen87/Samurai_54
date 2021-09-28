import React, {RefObject} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post likesCount={p.likesCount} message={p.message}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>

            <AddMyPostFormRedux onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}
const length10 = maxLengthCreator(10)
const AddMyPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field name="newPostText" component={Textarea} validate={[required,length10]} placeholder={"Post Message"}/>
        {/*<textarea
            value={props.newPostText}
            onChange={onPostChange}
            ref={newPostElement}
        />*/}
        <div>{/**/}
            <button>Add Post</button>
            {/*<button onClick={onAddPost}>Add Post</button>*/}
        </div>
    </form>)
}

const AddMyPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddMyPostForm)

export default MyPosts;