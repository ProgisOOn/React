import Header from "./components/Header"
import TeachingSection from "./components/TeachingSection" 
import DefferencesSection from "./components/defferencesSection"
import IntroSection from "./components/IntroSection"
import TabsSection from './components/TabsSection'
import { useState } from "react"
import FeedbackSection from "./components/FeedbackSection"


export default function App() {
  const [tab, setTab] = useState('main')

  return (
    <>
      <Header />
      <main>
      <IntroSection />
      <TabsSection  active={tab} onChange={(current) => setTab(current)} />

      {tab == 'main' && (
        <>
        <TeachingSection />
        <DefferencesSection />
        </>
      )}

      {tab == 'feedback' && <FeedbackSection />}

      
        
      </main>
    </>
  )
}

