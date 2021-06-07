import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <div className="page">
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eius numquam perspiciatis quas rem! A
                architecto atque et itaque quo.</p>
            {!props.isAuthenticated && (
                <Link to="/login"><b>Klik hier om in te loggen</b></Link>
            )}
            {props.isAuthenticated && (
                <Link to="/blogposts"><b>Klik hier voor de blogs</b></Link>
            )}
        </div>
    )
}

export default Home;