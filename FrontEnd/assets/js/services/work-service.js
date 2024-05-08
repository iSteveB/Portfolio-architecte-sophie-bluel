export const getData = () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:5678/api/works')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

export const createWork = (data, token) => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:5678/api/works', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

export const deleteWork = (id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5678/api/works/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}
