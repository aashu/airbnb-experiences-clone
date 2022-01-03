import img_grid from '../images/photo-grid.png'
export default function Intro() {
    return (
        <section className="intro">
            <img src={img_grid} alt="banner" className="intro--banner"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}