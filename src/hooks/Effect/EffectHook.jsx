import { useEffect, useState } from "react"

export default function EffectHook() {

  const [users, setUsers]=useState([])
  const [usersFiltred, setUsersFiltred]=useState([])
  const [inputUser, setInputUser] = useState()

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))

    return ()=>{
      return false
    }
  }, [])

  useEffect(()=>{ 
    setUsersFiltred(users)
  }, [users])

  useEffect(() => {
    const filtredUsers = users.filter(
      user => user.name.toLowerCase().includes(inputUser)
    )
    setUsersFiltred(filtredUsers)
  }, [inputUser])

  /*const handleChange = (ch) => {
    setInputUser(ch.target.value)
  }*/

  return (
    <div>
      <input type="text" className="search" onInput={ch => setInputUser(ch.target.value)} />
      {usersFiltred.map(
        user => 
          <h6 key={user.id}>
            {user.name}
          </h6>
      )}
    </div>
  )
}