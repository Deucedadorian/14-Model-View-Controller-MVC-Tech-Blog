const createComment = async (event) => {
    event.preventDefault();

    const contents = document.querySelector('#comment-contents').value.trim();

    if (contents) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ contents }),
        header: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('failed to create comment');
      }
    }
}

const updatePost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const contents = document.querySelector('#post-contents').value.trim();

  if (title && contents) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};
  
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', createComment);

document
  .querySelector('.update-post-form')
  .addEventListener('submit', updatePost);

  
document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);