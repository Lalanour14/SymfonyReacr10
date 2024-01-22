
export default function Api() {
    const getUsers = async () => {
      
      const res = await fetch("http://localhost:8000/api/users.json", {
        type: "GET",
      });
      return await res.json();
    };
  
    return {
      getUsers,
    };
  }
  
