import logo from '/logo-name.svg'

export default function Header() {
    const now = new Date()
    const name = 'Result'

    return (
      <header>
        <img src={logo} alt={name} />
          {/* <h3>Result University</h3> */}
  
          <span>Current time: { now.toLocaleTimeString() }</span>
        </header>
    )
  }