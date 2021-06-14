const updatePost = async (event) => {
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
        document.location.replace(`/post/${req.params.id}`);
      } else {
        alert('failed to create comment');
      }
    }
}
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', updatePost);
