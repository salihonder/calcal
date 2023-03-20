const MeasureText = ({ label, kgcm }) => {
    return <section className="measureWrapper">
        <label className="measureLabel">{label}</label>
        <div className="inputWrapper" >
            <input className="measures" value={"ddd"} />
            {kgcm && <label className="kgOrCm">{kgcm}</label>}
        </div>
    </section>
}

export default MeasureText;