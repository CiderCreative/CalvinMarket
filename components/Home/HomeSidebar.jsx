import { AccountIndication, FilterButton, FilterContainer, HighlightContainer, ItemHighlight, ListingButtons, Searchbar, Settings } from "@/components/Home/index"
import { Logo } from "@/components/Global/index"

const HomeSidebar = () => {
  return (
    <div>
      HomeSidebar:
      <Logo />
      <ListingButtons />
      <FilterContainer />
    </div>
  )
}

export default HomeSidebar