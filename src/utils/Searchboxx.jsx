import data from './data'
import Turnstone from 'turnstone'


const Searchboxx = () => {
  const styles = {
    input:"border p-2 bg-neutral w-full",
    listbox:"border p-2 bg-neutral w-full"
  }

  const options = data.map(item => ({ label: item.title, value: item.id })); // Create an array of options with labels as titles

  return (
    <div>
      <Turnstone id="autocomplete" debounceWait={250} listbox={options} styles={styles} autoFocus={true} cancelButton={false} />
    </div>
  )
}

export default Searchboxx;