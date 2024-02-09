
function loadBlogToUpdate() {
    const blogIdToUpdate = localStorage.getItem('UpdateId');

    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    console.log(blogIdToUpdate);
    const blogToUpdate = existingBlogs.find(blog => blog.id === blogIdToUpdate);

    if (blogToUpdate) {
        document.getElementById('updatedTitle').value = blogToUpdate.title;
        document.getElementById('updatedContent').value = blogToUpdate.content;
    } else {
        console.error('Blog not found for update.');
    }
}


    

function saveUpdatedBlog() {
    const updatedTitle = document.getElementById('updatedTitle').value;
    const updatedContent = document.getElementById('updatedContent').value;

    const blogIdToUpdate = localStorage.getItem('UpdateId');

    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blogIndexToUpdate = existingBlogs.findIndex(blog => blog.id === blogIdToUpdate);

    if (blogIndexToUpdate !== -1) {
        existingBlogs[blogIndexToUpdate].title = updatedTitle;
        existingBlogs[blogIndexToUpdate].content = updatedContent;

        localStorage.setItem('blogs', JSON.stringify(existingBlogs));

        localStorage.removeItem('UpdateId');

        window.location.href = 'Viewblog.html';
    } else {
        console.error('Blog not found for update.');
    }
}
