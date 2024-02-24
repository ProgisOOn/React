import Header from "./components/Header"
import WayToTeach from "./components/WaysToTeach"
import Button from "./components/Button/Button"
import { ways } from "./data" 


export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
            <WayToTeach {...ways[0]}/>
            <WayToTeach {...ways[1]}/>
            <WayToTeach {...ways[2]}/>
            <WayToTeach {...ways[3]}/>
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          
          <Button>Подход</Button>
          <Button>Доступность</Button>
          <Button>Концентрация</Button>
        </section>
      </main>
    </div>
  )
}

