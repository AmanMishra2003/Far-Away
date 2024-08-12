function Stats({data}) {
    const length = data.length;
    const packedItems = data.filter(ele=>ele.packed).length;
    const percentageOfPackedItem = Math.floor(packedItems*100/length);
    return (
        <footer className="stats">
            <em>
            📦 You have {length} items on your list, and you already packed {packedItems} ({percentageOfPackedItem}%)
            </em>
        </footer>
    )
}

export default Stats
