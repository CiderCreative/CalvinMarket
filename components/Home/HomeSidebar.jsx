import { AccountIndication, FilterButton, FilterContainer, HighlightContainer, ItemHighlight, ListingButtons, Searchbar, Settings } from "@/components/Home/index"
import { Logo } from "@/components/Global/index"

const HomeSidebar = () => {
  return (
    <div className="bg-primary fixed left-0 top-0 h-full w-[250px]">
      <Logo />
      <ListingButtons />    {/* Create & Edit Listing */}
      <FilterContainer />   {/* "School Supplies", "Electronics", etc. */}
    </div>
  )
}

export default HomeSidebar