import Button from "./Button/Button";

export default function TabsSection( active, onChange ){
    console.log(active)
    return(
        <section style = {{marginBottom: '1rem'}}>
           <Button isActive={active.active == 'main'} onClick={() => active.onChange('main')}>Главная</Button>
           <Button isActive={active.active == 'feedback'} onClick={() => active.onChange('feedback')}>Обратная связь</Button>
        </section>
    )
}