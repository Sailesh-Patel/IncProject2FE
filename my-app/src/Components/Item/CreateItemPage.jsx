
import CreateItem from "./CreateItem";
import ItemDisplay from "./ItemDisplay";
import ItemTable from "./ItemTable";

function CreateItemPage() {
    return (
        <div>
            <h1>Create items</h1>
            <CreateItem/>
            <ItemTable/>
        </div>
    )
}

export default CreateItemPage;