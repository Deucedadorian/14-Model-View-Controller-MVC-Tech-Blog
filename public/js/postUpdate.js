const updatePost = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

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
        alert('Failed to update post');
      }
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
  .querySelector('.update-post-form')
  .addEventListener('submit', updatePost);

document
    .querySelector('.delete')
    .addEventListener('click', delButtonHandler);
