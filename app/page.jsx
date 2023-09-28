import { AccountIndication, FilterButton, FilterContainer, HighlightContainer, ItemHighlight, ListingButtons, Searchbar, Settings, HomeSidebar } from "@/components/Home/index"

function Home({ signOut, user }) {
  return (
    <div>
      <HomeSidebar />

      <div>
        <Searchbar />
        <>
          <AccountIndication />
          <Settings />
        </>
      </div>

      <HighlightContainer text="Top 5"/>
      <HighlightContainer text="Newly Added"/>
      <HighlightContainer text="Textbooks"/>
      <HighlightContainer text="Free Items"/>
    </div>
  )
}

export default Home;