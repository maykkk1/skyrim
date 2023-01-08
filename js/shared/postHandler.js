export const PostRoute = (id) => {
    console.log('aconteci')
    sessionStorage.setItem('postId', id);
    window.location.href = "../../sections/posts/posts.html";
}