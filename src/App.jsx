import Header from './components/Heading.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'
import './App.css'

export default function App() {
  const traverseData = data.map((entry) => {
    return (
       <Entry
            img={entry.img}
            title={entry.title}
            country={entry.country}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text}
      />
    )
  })

    return (
        <>
            <Header />
            <main className="container">
               {traverseData}
            </main>
        </>
    )
}