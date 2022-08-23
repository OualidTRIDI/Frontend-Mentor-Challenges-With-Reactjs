import { Link } from 'react-router-dom';

export default function Home({ challengesInfo }) {
    return (
        <div className="home">

            <ul>

                {challengesInfo.map(
                    (challenge, index) =>
                        <li key={index}>
                            <Link to={challenge.info.url}>
                                <h2>{challenge.info.name}</h2>
                            </Link>
                        </li>
                )}

            </ul>
        </div>
    );
}