import "./Advantages.css"

const Advantages = () => {
  return(
    <section className="advantages">
      <div className="advantages__container container">
        <div className="advantages__list">
          <div className="advantages__item">
            <h3 className="advantages__title">117 000</h3>
            <p className="advantages__text">סוכנים בעולם</p>
          </div>

          <div className="advantages__item">
            <h3 className="advantages__title">7000</h3>
            <p className="advantages__text">משרדים בעולם</p>
          </div>

          <div className="advantages__item">
            <h3 className="advantages__title">110</h3>
            <p className="advantages__text">מדינות</p>
          </div>

          <div className="advantages__item">
            <h3 className="advantages__title">45</h3>
            <p className="advantages__text">שנים בשוק הנדל"ן</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages;