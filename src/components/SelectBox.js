const SelectBox = () => {
    return <>
        <label className="measureLabel">Activity</label>
        <select className="measures selectbox">
            <option>No  exercise</option>
            <option>Lightly active</option>
            <option>Moderately active</option>
            <option>Very active</option>
            <option>Extra active</option>
        </select>
        <label className="chevrondown">V</label>
    </>
}

export default SelectBox;