const SearchCar = (props) => {
  // new code here
  let { searchCar, handleChange } = props
  return (
  // new code here
      <>
          <label htmlFor="search">Search: </label>
          <input
              id="search"
              type="text"
              value={searchCar}
              onChange={handleChange}
          />
      </>

  )
}

export default SearchCar;