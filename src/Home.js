import { Link } from 'react-router-dom';

export default function Home({ challengesInfo }) {
    return (
        <div className="home">

            <ul>

                <li>
                    <Link to={challengesInfo[0].url}>
                        <h2>{challengesInfo[0].name}</h2>
                    </Link>
                </li>

            </ul>
        </div>
    );
}