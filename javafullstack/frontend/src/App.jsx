import { useState } from 'react'
import './index.css';
import Turn from './Componets/Form'
import { LoginPage } from './Componets/Loginpage';

function App() {
  const [count, setCount] = useState(0)

  return (
<div>

  {/* <Turn/> */}
  <LoginPage/>
</div>

  )


}

export default App
