import classCalculator from "./Calculator.module.css"
import img from "./assets/points.png"
const Calculator = () => {
    return (

        <>
            <div className={classCalculator.calculator}>
                <div className={classCalculator.imgIcon}>
                    <img src={img} alt="imgIcon" />
                </div>
                <div class={classCalculator.screen}id="state">0</div>
                <div className={classCalculator.keys}>
                    <div className={classCalculator.row1}>
                        <button class={`${classCalculator.button} ${classCalculator.operator} ${classCalculator.ac}`} id="AC">AC</button>
                        <button class={`${classCalculator.button} ${classCalculator.operator}`} >%</button>
                        <button class={`${classCalculator.button} ${classCalculator.operator}`}>±</button>
                        <button class={`${classCalculator.button} ${classCalculator.operator}`} >/</button>
                    </div>
                    <div className={classCalculator.row2}>
                        <button className={`${classCalculator.button}${classCalculator.number}`}>7</button>
                        <button className={`${classCalculator.button}${classCalculator.number}`} >8</button>
                        <button className={`${classCalculator.button}${classCalculator.number}`} >9</button>
                        <button className={`${classCalculator.button}${classCalculator.operator}`} >*</button>
                    </div>
                    <div className={classCalculator.row3}>
                        <button className={`${classCalculator.button}${classCalculator.number}`} >4</button>
                        <button className={`${classCalculator.button}${classCalculator.number}`} >5</button>
                        <button className={`${classCalculator.button}${classCalculator.number}`} >6</button>
                        <button className={`${classCalculator.button}${classCalculator.operator}`} >-</button>
                    </div>
                    <div className={classCalculator.row4}>
                        <button className={`${classCalculator.button}${classCalculator.number}`} >1</button>
                        <button className={`${classCalculator.button}${classCalculator.number}`} >2</button>
                        <button className={`${classCalculator.button}${classCalculator.number}`} >3</button>
                        <button className={`${classCalculator.button}${classCalculator.operator}`} >+</button>
                    </div>
                    <div className={classCalculator.row5}>
                        <button className={`${classCalculator.button}${classCalculator.number}`}>0</button>
                        <button className={`${classCalculator.button}${classCalculator.number}`} >.</button>
                        <button className={`${classCalculator.button}${classCalculator.equal}`} >=</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Calculator