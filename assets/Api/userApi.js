

export default function Api() {
    const getUsers = () => {
      return fetch("http://localhost:8000/api/users", {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
      getUsers,
    };
  }
  
