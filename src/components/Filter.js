function Filter({onFilter}) {

    function handleSelect(e) {
      console.log(e.target.value);
      onFilter(e.target.value)
    }

    return (
      <div>
      <select onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Not Greased">Not greased</option>
        <option value="Greased">Greased</option>
      </select>
    </div>
    )
}

export default Filter