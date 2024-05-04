export const getData = () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:5678/api/works')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};


