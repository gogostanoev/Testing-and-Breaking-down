import { data } from "./components/Data/Data";
import RegistrationForm from "./components/RegistratiomForm/RegistrationForm"
import UsersRegistered from "./components/UsersRegistered/UsersRegistered"

function App() {
  const [users, setUsers] = useState(data);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser])
  };

  const handleDeleteUser = (id) => {
    if (users.length === 0) {
      alert("There are no users");
      return
    };

    const deletedUsers = users.filter((user) => user.id !== id);

    setUsers(deletedUsers);
  };

  const handleDeleteAllUsers = () => {
    // for (let i = 0; i < registeredUsers.length; i++) {
    //   const user = registeredUsers[i];
    //   handleDeleteUser(user.id);
    // }

    setUsers([]);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <h3>Please fill out this form in order to registrate:</h3>
      <RegistrationForm handleAddUser={handleAddUser} />
      <br />
      <h2>Registered Users</h2>
      <UsersRegistered registeredUsers={data}
      handleDeleteUser={handleDeleteUser}
      handleDeleteAllUsers={handleDeleteAllUsers}
      />
    </>
  )
}

export default App
