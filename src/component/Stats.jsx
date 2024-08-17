function Stats({data}) {
    if(!data.length){
        return (
            <footer className="stats">
                    <em>
                    Start adding items to your packing list🏝️
                    </em>
            </footer>
        )
    }
    const length = data.length;
    const packedItems = data.filter(ele=>ele.packed).length;
    const percentageOfPackedItem = Math.floor((packedItems / length)*100);
    console.log(percentageOfPackedItem)
    return (
        <footer className="stats">
            {
                (packedItems===length) ? 
                <em>
                    You got everything! Ready to go 🛩️
                </em>
                :
                <em>
                📦 You have {length} items on your list, and you already packed {packedItems} ({percentageOfPackedItem}%)
                </em>
            }
        </footer>
    )
}

export default Stats
