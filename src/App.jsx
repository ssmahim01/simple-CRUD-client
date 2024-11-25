import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const handleAddUser = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};

    console.log(user);

    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('Users added successfully');
        form.reset();
      }
    })
  };

  return (
    <>
      <h1>Simple CRUD</h1>
      <Navbar></Navbar>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App