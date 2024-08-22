import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [users, setUsers] = useState([
    { userId: 1, userName: 'Ziad Eid', userState: 'left 7 mins ago', actionState: 'last seen 2 hrs ago' },
    { userId: 2, userName: 'Ziad Eid', userState: 'online', actionState: 'online' },
    { userId: 3, userName: 'Ziad Eid', userState: 'online', actionState: 'typing' },
    { userId: 4, userName: 'Ziad Eid', userState: 'left 10 mins ago', actionState: 'last seen 11 mins ago' },
    { userId: 5, userName: 'Ziad Eid', userState: 'online', actionState: 'last seen 2 min ago' },
    { userId: 6, userName: 'Ziad Eid', userState: 'offline since Oct 28', actionState: '' },
  ]);
  const [user, setUser] = useState({})

  // const getUsers = async () => {
  //   axios.get(``).then(res => {
  //     setUsers(res.data.data);
  //   })
  // }
  // useEffect(() => {
  //   getUsers()
  // }, [])

  const [activeUser, setActiveUser] = useState(1);

  const getUser = () => {
    const user = users.find(user => user.userId == activeUser)
    setUser(user);
  }

  useEffect(() => {
    getUser()
  }, [activeUser])



  const values = { users, activeUser, user, setActiveUser };
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}