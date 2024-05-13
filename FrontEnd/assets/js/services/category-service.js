export const getCategories = async () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:5678/api/categories')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  })
};