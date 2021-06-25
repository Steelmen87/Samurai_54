import React, {RefObject} from "react";

import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post likesCount={p.likesCount} message={p.message}/>);
    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
    let onAddPost = () => {
        if (props.newPostText === "") {
            return;
        }
        props.addPost();

    }
    let onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text);
        }

    }
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <textarea
                value={props.newPostText}
                onChange={onPostChange}
                ref={newPostElement}
            />
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}
export default MyPosts;