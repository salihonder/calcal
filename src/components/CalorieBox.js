const CalorieBox = (props) => <div className="boxContainer">
    <h3>{props.title}</h3>
    <section className="box">
        <label className="boxTitle">{props.calorie}</label>
        <label className="boxPercentage">{props.percentage}</label>
        <label className="boxPercentage">Calories/day</label>
    </section>
</div>

export default CalorieBox;